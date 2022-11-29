Message URI: `https://ligo.dev/didcomm/agent/1.0/sign-safe-transaction-response`

Response to [SignSafeTransactionRequest](./SignSafeTransactionRequest)

```json
{
	"id": "<UUID>",
	"thid": "<Thread ID of SignSafeTransactionRequest>",
    "type": "https://ligo.dev/didcomm/agent/1.0/sign-safe-transaction-response",
    "body": {
        "safeTransactionSignatures": {}
    }
}
```

```ipldsch
type SafeSignature struct {
	signer String
	data String
}

type SignSafeTransactionResponse struct {  
	safeTransactionSignatures {String:SafeSignature}
}
```