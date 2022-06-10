---
title: "Booking Signatures"
---

Both the agreement and most of the state are private, encrypted [DAG-JOSE](https://ipld.io/specs/codecs/dag-jose/spec/) IPLD objects.

![Booking and Agreement State IPFS.excalidraw](../drawings/Booking%20and%20Agreement%20State%20IPFS.excalidraw.svg)

The public state stored in the Gnosis Safe holds an immutable pointer to the off-chain private state. Any changes to the private state or agreement requires a signature from both parties to be sent to the Gnosis Safe.

![Gnosis Safe IPFS Agreements.excalidraw](../drawings/Gnosis%20Safe%20IPFS%20Agreements.excalidraw.svg)

---
## Appendix
### Open Questions
- Offline capability
	- Could the transaction be executed later?
		- Either party can execute
		- Both are incentivized to publish eventually
		- Should be fine as long as order is kept?
- Paying for transactions
	- Meta transactions could be used
	- Split fee between parties?