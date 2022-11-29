Message URI: `https://ligo.dev/didcomm/agent/1.0/create-or-update-did-request`

Create or update and existing DID to be managed by recipient. Should be sent by a DID key that is authorized by a CACAO object.

Manager should add the DID key and derive the DID key from the wallet of the CACAO object and add both to the new DID Web document.

If the user loses the DID session key, they can resend this message using a new DID session key with the same wallet. The manager should remove the previous session key and add the new one.

```json
{
	"id": "<UUID>",
    "type": "https://ligo.dev/didcomm/agent/1.0/create-or-update-did-request",
    "body": {"/": "<CID of CACAO object>"},
    "attachments": [
	    {
	      "id": "<CID of CACAO object>",
	      "data": {
	        "base64": "<base64 encoded block of CACAO object>"
	      }
	    }
    ]
}
```