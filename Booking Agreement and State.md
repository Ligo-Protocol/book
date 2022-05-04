---
tags: ligo-book
---

The _state_ of a booking contains information needed to exchange value and services.

The _agreement_ defines how _state_ can change and how the agreement itself can change.

![](Booking%20Agreement%20and%20State%201.excalidraw.png)

![](Booking%20Agreement%20and%20State%202.excalidraw.png)

The agreement may define how changes in one state lead to changes in another state. For example, an agreement may define that if the state of mileage is above a certain amount, the balances will change in order to deduct fees. It may also define that the state of mileage can only change if a third-party, say Smartcar, says it changed.

```
Source of truth for `mileage` is Smartcar -> If `mileage` > 1000 -> $50 is deducted from `balances`
```
