---
title: "File a Dispute"
---

Whenever there is a disagreement about a _state change_, one party may not be able to get the other party to sign off on what they believe the correct state is. If this happens, they may file a dispute.

![File a Dispute.excalidraw](../../drawings/File%20a%20Dispute.excalidraw.svg)

1. A dispute is filed with the Ligo Safe Module and the IPFS CID of the latest agreed upon state is provided
2. The module forwards the dispute to a Chainlink External Adapter who fetches the latest state and agreement
3. The external adapter resolves the latest state
4. The resolved state is sent back to the module
5. The module stores the resolve state CID and transfers funds if needed

---

## Appendix
### To Do
- [ ] Add details on how Chainlink External Adapter decrypts private state
- [ ] Look into [Lit Actions](https://developer.litprotocol.com/LitActionsAndPKPs/whatAreLitActionsAndPKPs) as a possible alternative to Chainlink