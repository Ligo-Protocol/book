---
title: "Booking Signatures"
up: [[Booking Agreement and State]]
prev: [[Booking as a Ceramic Doc]]
---

Both the agreement and most of the state are private, encrypted DAG-JOSE IPFS objects.
![[202205101719 Booking and Agreement State IPFS.excalidraw]]
The public state stored in the Gnosis Safe holds an immutable pointer to the off-chain private state. Any changes to the private state or agreement requires a signature from both parties to be sent to the Gnosis Safe.

![[202205101726 Gnosis Safe IPFS Agreements.excalidraw]]

## Open Questions
- Offline capability
	- Could the transaction be executed later?
		- Either party can execute
		- Both are incentivized to publish eventually
		- Should be fine as long as order is kept?
- Paying for transactions
	- Meta transactions could be used
	- Split fee between parties?