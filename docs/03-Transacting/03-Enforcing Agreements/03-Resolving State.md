---
title: "Resolving State"
---

During a dispute, a third party is needed to independently resolve the latest state. This third party is a [Chainlink External Adapter](https://docs.chain.link/docs/external-adapters/).

For every piece of state, the agreement defines how the state should be resolved. This resolution process should be done by clients throughout an agreement and by a Chainlink External Adapter during a dispute.

Each state refers to the previous state, creating a chain of states. We will look at the different scenarios of the state chain that the third party may come across.

## Scenario A: Challenge Window Expires

The first scenario is when the challenge window expires and there is a single unsigned state at the end of the chain. In this scenario, the _verifiable state_ is verified and the _non-verifiable state_ is **assumed to be correct**.

![Resolving State - Unsigned Head.excalidraw](../../drawings/Resolving%20State%20-%20Unsigned%20Head.excalidraw.svg)

## Scenario B: Longer State Chain

If a second state is submitted by the other party during a challenge window, this state may be signed and have a longer chain (a nonce greater than or equal to the unsigned state). In this scenario, the signed state with the higher nonce is assumed to be correct and the challenge is considered invalid.

This may be caused by the challenger submitting an out-of-date state, or from the other party accepting the new state during the challenge window.

![Resolving State - Longest Chain.excalidraw](../../drawings/Resolving%20State%20-%20Longest%20Chain.excalidraw.svg)

## Scenario C: Disputed State Chain

The last scenario is when the other party submits an alternate state that is also unsigned.

This may be caused by the two parties disagreeing on a state change or disagreeing that a state change should even happen.

![Resolving State - Dispute.excalidraw](../../drawings/Resolving%20State%20-%20Dispute.excalidraw.svg)

In this scenario, the dispute resolution process defined below is triggered.

### Verifiable State Resolution
Certain types of state are _verifiable_ and contain attestations from third parties. For example, this may be a signed piece of data from an OEM or vehicle API provider attesting the odometer reading of the vehicle at a certain time.

Verifiable state is always resolved by verifying the attestations made by a set of trusted third parties outlined in the agreement. A dispute may have two different verifiable states that are both valid. In this case, the state is resolved using some rules about the _timestamp_, dependent on the particular type of state change.

For example, certain types of state may be resolved by taking the _earliest_, _latest_, or _closest_ to some other defined time. These rules should be defined in the agreement.

### Non-Verifiable State Resolution
Not all state can be resolved through some third party data source, but must instead have some subjective human review. This can include, for example, whether or not a car is clean.

[ERC-792](https://developer.kleros.io/en/latest/index.html) is an arbitration standard by [Kleros](https://kleros.io) that can be used to resolve this kind of state. Kleros Court selects human jurors to review a case and respond with a verdict conforming to the ERC-792 standard.

### Resolution Steps

![External Adapter Resolve State.excalidraw](../../drawings/External%20Adapter%20Resolve%20State.excalidraw.svg)

1. The external adapter first resolves all the verifiable state it can
2. Any remaining state is resolved using ERC-792
3. The final resolved state is returned to the safe module

---

## Appendix
### To-Dos
- [ ] Add details on privacy
	- The entire agreement and state does not need to be shared with arbitrators for evidence

### Open Questions
- Who runs the external adapters?
- Federated or decentralized process behind choosing external adapter