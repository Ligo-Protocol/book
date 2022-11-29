Message URI: `https://ligo.dev/didcomm/agent/1.0/execute-safe-transaction`

Request an agent to execute a SafeTransaction and receive a gas refund.

```json
{
	"id": "<UUID>",
    "type": "https://ligo.dev/didcomm/agent/1.0/execute-safe-transaction",
    "body": {
        "safeTransactionData": { "/": "<CID of SafeTransactionData>" },
        "safeTransactionSignatures": {}
    },
    "attachments": [
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
type SafeTransactionData Map
type SafeSignature struct {
	signer String
	data String
}

type ExecuteSafeTransaction struct {  
	safeTransactionData &SafeTransactionData
	safeTransactionSignatures {String:SafeSignature}
}
```