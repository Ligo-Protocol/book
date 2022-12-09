Message URI: `https://didcomm.org/basicmessage/2.0/message`

See [BasicMessage | DIDComm](https://didcomm.org/basicmessage/2.0/)

```json
{
    "id": "123456780",
    "type": "https://didcomm.org/basicmessage/2.0/message",
    "lang": "en",
    "created_time": 1547577721,
    "body": {
        "content": "Your hovercraft is full of eels."
    }
}
```

```ipldsch
type BasicMessage struct {  
	content string
}
```