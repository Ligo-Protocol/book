# Signing Agreements
The [LigoAgreement](../Schema/LigoAgreement) and [LigoAgreementState](../Schema/LigoAgreementState) objects are stored in IPFS using the [DAG-JOSE](https://ipld.io/specs/codecs/dag-jose/spec/) codec. They are signed by both parties and encrypted.

This document describes how the agreements are signed. The result should be used in [Encryption and Decryption](Encryption%20and%20Decryption.md) as the payload. That means agreements and state are signed and _then_ encrypted.

See a working example [here](https://github.com/Ligo-Protocol/ts-ligo-vocab/blob/main/examples/signing.mjs).

## Signing
This is an example of signing an agreement, taken from the js-dag-jose [example](https://github.com/ceramicnetwork/js-did/tree/main/packages/dids#authentication-with-the-provider).

```javascript
import { DID } from 'dids'

const agreement: LigoAgreement = ...
const didA: DID = ...
const didB: DID = ...

// 1. Create initial JWS with didA
const jwsA = await did.createJWS(agreement)

// 2. Send JWS to other party...

// 3. Other party signs with didB
const jwsB = await didB.createJWS(jwsB.payload);

// 4. Form final JWS signed by both parties
const jws = { ...jwsA, signatures: [...jwsA.signatures, ...jwsB.signatures] };
```

See [Encryption and Decryption](Encryption%20and%20Decryption.md) for how to encrypt this object and put it in IPFS.

## Verifying
Both parties' signatures need to be verified independently.

```javascript
import { DID } from 'dids'

const didA: DID = ...
const didB: DID = ...


const retrievedJWSA = {
	...jws,
	// Filter signatures for didA key
	signatures: jws.signatures.filter(
	  (v) =>
		JSON.parse(u8a.toString(base64ToBytes(v.protected)))["kid"].split(
		  "#"
		)[0] === didA.id
	),
};
const verifiedJWSA = await didA.verifyJWS(retrievedJWSA);


const retrievedJWSB = {
	...jws,
	// Filter signatures for didB key
	signatures: jws.signatures.filter(
	  (v) =>
		JSON.parse(u8a.toString(base64ToBytes(v.protected)))["kid"].split(
		  "#"
		)[0] === didB.id
	),
};
const verifiedJWSB = await didB.verifyJWS(retrievedJWSB);
```