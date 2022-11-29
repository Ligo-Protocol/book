Message URI: `https://ligo.dev/didcomm/agent/1.0/add-service

Add a service endpoint to a DID. Should be used to add a DIDComm endpoint to the DID.

```json
{
	"id": "<UUID>",
    "type": "https://ligo.dev/didcomm/agent/1.0/add-service",
    "body": {
	    "service": {}
    },
}
```