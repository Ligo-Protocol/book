---
title: "Forcing a State Change"
---

Whenever there is a disagreement about a _state change_, one party may not be able to get the other party to sign off on what they believe the correct state is. The other party may disagree or be unreachable. If this happens, they may try to force a state change without the other party by getting a third party to step in.

## 1. Submitting a Challenge

A **challenge** is filed with the Ligo Safe Module and the IPFS CID of the **proposed sate** is provided

![Force a State Change.excalidraw](../../drawings/Force%20a%20State%20Change.excalidraw.svg)

For _public_ state, a challenge can also be submitted with the state change directly part of the transaction.

![Force a State Change 5.excalidraw](../../drawings/Force%20a%20State%20Change%205.excalidraw.svg)

## 2a. Challenge Window Expires

If the challenge window expires without a response from the other party, a third party steps in to resolve the state. See [Resolving State](./Resolving%20State).

![Forcing a State Change 2.excalidraw](../../drawings/Forcing%20a%20State%20Change%202.excalidraw.svg)

## 2b. State Change is Disputed

The other party may disagree with the proposed state change. If they disagree and submit a dispute before the challenge window expires, a third party steps in to resolve the dispute. See [Resolving State](./Resolving%20State).

![Forcing a State Change 3.excalidraw](../../drawings/Forcing%20a%20State%20Change%203.excalidraw.svg)

## 2b. Other party accepts change

The other party can still choose to accept the state change as long as state resolution has not been triggered.

![Forcing a State Change 4.excalidraw](../../drawings/Forcing%20a%20State%20Change%204.excalidraw.svg)
