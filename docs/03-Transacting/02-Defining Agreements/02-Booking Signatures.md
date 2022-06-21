---
title: "Booking Signatures"
---

Both the agreement and most of the state are private, encrypted [DAG-JOSE](https://ipld.io/specs/codecs/dag-jose/spec/) IPLD objects.

![Booking and Agreement State IPFS.excalidraw](../../drawings/Booking%20and%20Agreement%20State%20IPFS.excalidraw.svg)

## Agreement Changes
The public state stored in the Gnosis Safe holds a pointer to the off-chain agreement. Any changes to the agreement requires a signature from both parties to be sent to the Gnosis Safe. The pointer to the agreement is an IPLD CID (content identifier) that is stored in a [Safe Module](https://docs.gnosis-safe.io/contracts/modules-1).

![Booking Signature Module Off Chain.excalidraw](../../drawings/Booking%20Signature%20Module%20Off%20Chain.excalidraw.svg)

## State Changes
Changes to private state are done off chain and do not require a Gnosis Safe signature. Instead, changes require a signature from both parties directly and the state is stored off chain.

Each state contains a timestamp. This timestamp is included in the message and signed by each party. The state with the latest timestamp that is signed by both parties is considered the current state.

![Booking Signature Off Chain State.excalidraw](../../drawings/Booking%20Signature%20Off%20Chain%20State.excalidraw.svg)

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