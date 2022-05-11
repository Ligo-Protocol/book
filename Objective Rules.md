---
up: [[Dispute Resolution]]
---

What rules _can_ a smart contract enforce? **Objective** rules.

Certain objective rules can be enforced natively by a smart contract. Including rules that deal with time or money.

Certain rules cannot be enforced natively, but can still be objective. This mainly includes rules where the source of truth can be the Tesla (or automaker) API. Thus, oracles are required.

Objective rules can also be enforced by **clients**. For example, only allowing listings that have the proper vehicle registration could be enforced by clients looking at verifiable credentials entirely off-chain on say, Ceramic. The client would not let their user rent invalid vehicles, even though the smart contract might.