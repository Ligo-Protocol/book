---
title: "Listings"
---

A **listing** is a [Ceramic Tile Document](https://developers.ceramic.network/reference/stream-programs/tile-document/) that is controlled by the host. It must conform to the schema specified by the protocol.

A listing should include all the information necessary for a renter to determine if they would like to request a booking, as well as the information necessary for the renter to proceed with making a request.

![Listing.excalidraw](../drawings/Listing.excalidraw.svg)

The host will need a [Decentralized Identifier (DID)](https://www.w3.org/TR/did-core/) to control their listings.

---
## Appendix
### Open Questions
- What `family` and `tags` should the documents have?
- Ceramic is working on an indexing solution that will help discover these listings

### To Do
- [ ] Define schema