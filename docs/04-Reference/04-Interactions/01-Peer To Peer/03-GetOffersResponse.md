Message URI: `https://ligo.dev/didcomm/peer/1.0/get-offers-response`

Response to [GetOffersRequest](./GetOffersRequest).

```json
{
	"id": "<UUID>",
    "type": "https://ligo.dev/didcomm/peer/1.0/get-offers-response",
    "body": {
	    "offers": []
    }
}
```

```ipldsch
type Offer ...

type GetOffersResponse struct {  
	offers [&Offer]
}
```