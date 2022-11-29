---
title: "Interactions"
---

In order to come to an agreement, parties need to interact in some way. [DIDComm Messaging](https://didcomm.org) is a standard for DIDs to safely interact. Ligo implements an application-level protocol on top of DIDComm Messaging that allows two DIDs to come to an agreement.

[IPLD](https://ipld.io) and [IPLD Schemas](https://ipld.io/docs/schemas/) are used to define messages. The following is the base schema for a DIDComm message.

```ipldsch
type DIDCommMessageType string
type DID string

type AttachmentData struct {
	base64: String
}
type Attachment struct {
	id String
	data AttachmentData
}

type DIDCommMessage struct {  
	type DIDCommMessageType
	from optional DID
	to DID
	thid optional String
	pthid optional String
	id String
	expires_time optional String
	created_time optional String
	body Any
	attachments optional [Attachment]
}
```