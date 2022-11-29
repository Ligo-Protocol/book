Message URI: `https://ligo.dev/didcomm/peer/1.0/propose-agreement`

Propose an agreement to another party. There can be multiple proposals and a back and forth exchange. All future proposals should share the same thread ID (`thid`).

```json
{
	"id": "<UUID>",
	"thid": "<Thread ID of chain of proposals>",
    "type": "https://ligo.dev/didcomm/peer/1.0/propose-agreement",
    "body": {
        "offer": "<URI of offer>",
        "agreement": { "/": "<CID of proposed agreement>" },
        "agreementKey": "<symmetric key to encrypt attached agreement>",
        "safeTransactionData": { "/": "<CID of SafeTransactionData>" },
        "safeTransactionSignatures": []
    },
    "attachments": [
	    {
	      "id": "<CID of agreement>",
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

### Open Questions
- Offer as CID?
- Convert attachments to CAR?