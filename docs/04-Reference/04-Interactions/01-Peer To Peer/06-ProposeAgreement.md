Message URI: `https://ligo.dev/didcomm/peer/1.0/propose-agreement`

Propose an agreement to another party. There can be multiple proposals and a back and forth exchange. All future proposals should share the same thread ID (`thid`).

```json
{
	"id": "<UUID>",
	"thid": "<Thread ID of chain of proposals>",
    "type": "https://ligo.dev/didcomm/peer/1.0/propose-agreement",
    "body": {
        "offer": { "/": "<CID of offer>" },
        "agreement": { "/": "<CID of proposed agreement>" },
        "safeTransactionData": { "/": "<CID of SafeTransactionData>" },
        "safeTransactionSignatures": {}
    },
    "attachments": [
	    {
	      "id": "<CID of encrypted agreement>",
	      "data": {
	        "base64": "<base64 encoded block of encrypted agreement>"
	      }
	    },
	    {
		  "id": "<CID of SafeTransactionData>",
		  "data": {
		    "base64": "<base64 encoded block of SafeTransactionData>"
		  }
	    }
    ]
}
```

```ipldsch
type Offer ...
type SafeTransactionData Map
type SafeSignature struct {
	signer String
	data String
}

type ProposeAgreement struct {  
	offer &Offer
	agreement &DagJWE
	safeTransactionData &SafeTransactionData
	safeTransactionSignatures {String:SafeSignature}
}
```

### Open Questions
- Convert attachments to CAR?