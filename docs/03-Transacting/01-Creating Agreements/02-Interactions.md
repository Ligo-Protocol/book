---
title: "Interactions"
---

In order to come to an agreement, parties need to interact in some way. [DIDComm Messaging](https://didcomm.org) is a standard for DIDs to safely interact. Ligo implements a application-level protocol on top of DIDComm Messaging that allows two DIDs to come to an agreement.

## Message Types

Base Message URI: `https://ligo.dev/didcomm`

### ProposeAgreement
Propose an agreement to another party. There can be multiple proposals and a back and forth exchange. All future proposals should share the same thread ID (`thid`).

```json
{
	"id": "<UUID>",
	"thid": "<Thread ID of chain of proposals>",
    "type": "https://ligo.dev/didcomm/ProposeAgreement",
    "lang": "en",
    "created_time": 1547577721,
    "body": {
        "offer": "<URI of offer>",
        "agreementCid": "<CID of proposed agreement>",
        "agreementKey": "<symmetric key to encrypt attached agreement>",
        "safeTransactionHash": "<hash of Safe transaction>",
        "safeTransactionSignatures": []
    },
    "attachments": [
	    {
	      "id": "<CID of agreement>",
	      "data": {
	        "base64": "<base64 encoded CAR of DAG-JOSE encoded agreement>"
	      }
	    },
	    {
		  "id": "<SafeTransaction hash>",
		  "data": {
		    "json": {
		      // SafeTransactionData
		    }
		  }
	    }
    ]
}
```

---
### To Do
- Other message types