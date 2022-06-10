---
title: "Agreements and State"
alias: 
  - "booking"
  - "bookings"
slug: /
---

A booking is comprised of two parts: the _state_ and _agreement_.

The _state_ of a booking contains information needed to exchange value and services (e.g. the state of the vehicle, messages, photos, etc).

The _agreement_ defines how _state_ can change and how the agreement itself can change.

![Booking Agreement and State 1.excalidraw](../drawings/Booking%20Agreement%20and%20State%201.excalidraw.svg)
![Booking and Agreement State IPFS.excalidraw](../drawings/Booking%20and%20Agreement%20State%20IPFS.excalidraw.svg)

The agreement may define how changes in one state lead to changes in another state. For example, an agreement may define that if the state of mileage is above a certain amount, the balances will change in order to deduct fees. It may also define that the state of mileage can only change if a third-party, say Smartcar, says it changed.

```
Source of truth for `mileage` is Smartcar -> If `mileage` > 1000 -> $50 is deducted from `balances`
```

[Disputes](../Disputes) can be made at any _state change_ to a booking. In this example:
- Parties may disagree on the `mileage` that Smartcar says
- Parties may disagree that the mileage limit was 1000
- Parties may disagree that the fee was $50

---
## Appendix
### Archive
- [Booking as a ThreadDB](../03-Archive/Booking%20as%20a%20ThreadDB.md)
- [Booking as a Ceramic Doc](../03-Archive/Booking%20as%20a%20Ceramic%20Doc.md)
- [2021-03-08-3](../../drawings/2021-03-08-3.jpeg)
