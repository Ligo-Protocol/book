---
title: "Resolving State"
---

During a dispute, a third party is needed to independently resolve the latest state. This third party is a [Chainlink External Adapter](https://docs.chain.link/docs/external-adapters/).

For every piece of state, the agreement defines how the state should be resolved. This resolution process should be done by clients throughout an agreement and by a Chainlink External Adapter during a dispute.

## Objective Resolution
Certain types of state can be resolved _objectively_. In these cases, the external adapter can use other Chainlink oracles. These should be used for types of state that can come from some known data source (i.e. automaker or [Smartcar](https://smartcar.com/) APIs).

## Subjective Resolution
Not all state can be resolved through some third party data source, but must instead have some subjective human review. This can include, for example, whether or not a car is clean.

[ERC-792](https://developer.kleros.io/en/latest/index.html) is an arbitration standard by [Kleros](https://kleros.io) that can be used to resolve this kind of state. Kleros Court selects human jurors to review a case and respond with a verdict conforming to the ERC-792 standard.

## Resolution Steps

![External Adapter Resolve State.excalidraw](../../drawings/External%20Adapter%20Resolve%20State.excalidraw.svg)

1. The external adapter first resolves all the state it can using objective oracles
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