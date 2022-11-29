Message URI: `https://ligo.dev/didcomm/1.0/safe-escrow-signer-response`

Response to [SafeEscrowSignerRequest](./SafeEscrowSignerRequest)

```json
{
	"id": "<UUID>",
	"thid": "<Thread ID of SafeEscrowSignerRequest>",
    "type": "https://ligo.dev/didcomm/1.0/safe-escrow-signer-response",
    "body": {
	    "signerAccountId": "<Account ID of signer>"
    }
}
```