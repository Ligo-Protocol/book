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

```ipldsch
type AddServiceRequest struct {
	service Map
}
```

## Agent Handling
The agent should:
1. Add a new service to the sender DID

## Peer Handling
The peer should do nothing.