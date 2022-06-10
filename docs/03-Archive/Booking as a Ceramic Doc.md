---
title: "Booking as a Ceramic Doc"
up: [[Booking Agreement and State]]
tags:
  - archive
---

Both the agreement and most of the state are private, encrypted Ceramic documents.
 ![Booking Agreement and State 2.excalidraw](../drawings/Booking%20Agreement%20and%20State%202.excalidraw.svg)

The controller of these Ceramic documents is a `did:safe` representing the Gnosis Safe used to store booking funds and linking peer identities together.
![Gnosis Safe and Ceramic Agreements.excalidraw](../drawings/Gnosis%20Safe%20and%20Ceramic%20Agreements.excalidraw.svg)

Under the [Safe DID](https://developers.ceramic.network/docs/advanced/standards/accounts/safe-did/), both parties must sign any changes made to either document. If both parties agree on some change to the state or agreement, the process is straightforward.

**Update**: This was incorrect. Safe DID allows _any_ not _all_ signers to sign commits for a document. This approach will not work.