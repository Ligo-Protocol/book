---
title: "Interactions"
---

In order to come to an agreement, parties need to interact in some way. [DIDComm Messaging](https://didcomm.org) is a standard for DIDs to safely interact. Ligo implements a application-level protocol on top of DIDComm Messaging that allows two DIDs to come to an agreement.

## Message Types

Base Message URI: `https://ligo.dev/didcomm`

### ResponseToOffer

```json
{
	"id": "<UUID>",
    "type": "https://ligo.dev/didcomm/ResponseToOffer",
    "lang": "en",
    "created_time": 1547577721,
    "body": {
        "offer": "<id of offer>",
        "agreementKey": "<symmetric key to encrypt attached agreement>"
    },
    "attachments": [
	    {
	      "id": "<agreement cid>",
	      "description": "A LigoAgreement",
	      "data": {
	        "base64": "<base64 encoded CAR of DAG-JOSE encoded agreement>"
	      }
	    }
    ]
}
```

---
### To Do
- Counter offers using threads
- Other message types