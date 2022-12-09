Message URI: `https://ligo.dev/didcomm/peer/1.0/safe-escrow-signer-request`

Request the signer to use for making agreements with the sender. Should be called before creating an agreement to determine the signer to add to the Safe. Usually followed with a reply from the recipient with their own signer.

```json
{
	"id": "<UUID>",
    "type": "https://ligo.dev/didcomm/peer/1.0/safe-escrow-signer-request",
    "body": {}
}
```