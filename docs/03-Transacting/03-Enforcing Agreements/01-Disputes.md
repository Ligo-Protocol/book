---
title: "Disputes"
alias:
  - "disputes"
---

With any type of agreement comes disputes. Ultimately, a dispute is a disagreement about a _state change_. This comes in the form of one party refusing to sign a state change.

The possible reasons for disagreeing on a state change include disagreement about:
- **Rules** outlined in an agreement
- **State** of a booking

## Disputing Rules
Both parties must digitally sign the agreement before transacting, enabling [non-repudiation](https://en.wikipedia.org/wiki/Non-repudiation).

Disputes about rules are quite _objective_. Either each party signed an agreement or they didn't. Because agreements can change over time, there could be disagreements on what the latest version of an agreement is or room for data withholding attacks. 

An example of a disagreement about rules is one party believing the cleaning fee is $25 and the other party believing the cleaning fee is $50.

## Disputing State
The parties may agree about the rules of an agreement, but disagree about the _state_ of the booking.

For example, the parties may agree that the cleaning fee is $25, but disagree on how clean the vehicle is upon return and thus whether the fee applies.

## Resolving Disputes
If there is a dispute between the parties, a **third-party** must step in. This third-party is a _smart contract_ aided by _oracles_.

:::info  
An [**oracle**](https://ethereum.org/en/developers/docs/oracles/) is how smart contracts obtain information about the real world.
:::

Various oracles may be used, depending on how objective or subjective the dispute is.

## Optimistic State Changes
In many scenarios, the state changes can be so well-defined and objective that it is irrational for parties to ever disagree. This is why state changes are **optimistic**. That is, oracles are not needed until there is a dispute, because both parties are heavily incentivized to agree on what the oracle will say.

---

## Appendix
### To Do
- [ ] Add examples of subjective and objective cases
- [ ] Describe the process of filing a dispute
- [ ] Describe different types of oracles
- [ ] Diagram state changes
- [ ] Diagram a dispute

### Archive
- [Objective Rules](04-Archive/Objective%20Rules.md)
- [Subjective Rules](04-Archive/Subjective%20Rules.md)
