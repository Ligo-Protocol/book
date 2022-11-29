Message URI: `https://ligo.dev/didcomm/agent/1.0/sign-safe-transaction-request`

Request an agent to sign a SafeTransaction.

```json
{
	"id": "<UUID>",
    "type": "https://ligo.dev/didcomm/agent/1.0/sign-safe-transaction-request",
    "body": {
	    "agreement": { "/": "<CID of encrypted agreement>" },
        "safeTransactionData": { "/": "<CID of SafeTransactionData>" },
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

type SignSafeTransactionRequest struct {
	agreement &DagJWE
	safeTransactionData &SafeTransactionData
}
```

## Agent Handling
The agent should:
1. Fetch signer for agreement
2. Sign SafeTransactionData
3. Reply with [SignSafeTransactionResponse](./SignSafeTransactionResponse)

## Peer Handling
The peer should do nothing.