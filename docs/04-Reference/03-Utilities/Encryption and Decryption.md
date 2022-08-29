# Encryption and Decryption
The [LigoAgreement](../01-Vocabulary/LigoAgreement.md) and [LigoAgreementState](../01-Vocabulary/LigoAgreementState.md) objects are stored in IPFS using the [DAG-JOSE](https://ipld.io/specs/codecs/dag-jose/spec/) codec. They are signed by both parties and encrypted.

This document describes how the encryption and decryption of these objects works.

## Encryption

### 1. Create Lit symmetric key
[Lit Protocol](https://litprotocol.com/) is used to encrypt content that only the parties on an agreement can access.

```javascript
import LitJsSdk from "@lit-protocol/sdk-browser";

// 1. Setup Lit SDK
const client = new LitJsSdk.LitNodeClient();  
await client.connect();

// 2. Generate a symmetric key without encryption anything yet
const { symmetricKey } = await LitJsSdk.encryptString("");
```

### 2. Derive Access Control Conditions
The access control conditions define who has access to the symmetric key. This can be derived given the address of the Safe for the agreement (`<safeAddress>`).

```javascript
const accessControlConditions = [
  {
	contractAddress: <safeAddress>,
	functionName: "isOwner",
	functionAbi: {
	  inputs: [
		{
		  internalType: "address",
		  name: "owner",
		  type: "address",
		},
	  ],
	  name: "isOwner",
	  outputs: [
		{
		  internalType: "bool",
		  name: "",
		  type: "bool",
		},
	  ],
	  stateMutability: "view",
	  type: "function",
	},
	chain: <chain where safe lives>,
	functionParams: [":userAddress"],
	returnValueTest: {
	  key: "",
	  comparator: "=",
	  value: "true",
	},
  },
]
```

### 3. Save key in Lit
Given the symmetric key and derived access control conditions, the key can now be saved in the Lit network.

```javascript
import LitJsSdk from "@lit-protocol/sdk-browser";

// 1. Setup Lit SDK
const client = new LitJsSdk.LitNodeClient();  
await client.connect();

// 2. Generate auth sig from user wallet
const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: <chain where safe lives> });

const encryptedSymmetricKey = await client.saveEncryptionKey({
  accessControlConditions,
  symmetricKey,
  authSig,
  <chain where safe lives>,
});
```

### 4. Save object in IPFS
Given a `LigoAgreement` or `LigoAgreementState` object and the `encryptedSymmetricKey`, the object can be encrypted and stored in IPFS. Taken from the js-dag-jose [example](https://github.com/ceramicnetwork/js-dag-jose#symmetric-encryption):

```typescript
import { xc20pDirEncrypter, createJWE } from "did-jwt";
import { prepareCleartext } from "dag-jose-utils";

const agreement: LigoAgreement = ...

// 1. Prepare cleartext
const dirEncrypter = xc20pDirEncrypter(symmetricKey)
const cleartext = await prepareCleartext(agreement)

// 2. Encrypt + add encrypted key to protected header
const jwe = await createJWE(cleartext, [dirEncrypter], { encryptedSymmetricKey })

// 3. Put encrypted object in IPFS
const cid = await ipfs.dag.put(jwe, { format: dagJoseIpldFormat.codec, hashAlg: 'sha2-256' })
```


