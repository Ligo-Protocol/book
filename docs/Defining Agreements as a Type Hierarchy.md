---
title: "Defining Agreements as a Type Hierarchy"
up: [[Booking Agreement and State]]
---

Agreements can be defined with inheritance.

For example, take a "pricing" agreement. Sub agreements that clients may support in the future could be a "discount".

New clients that understand a discount can take advantage of it. Old clients can just treat it as a more generic pricing agreement 

Type hierarchy https://schema.org/docs/datamodel.html

![[202205031435 Agreement Hierarchy Example.excalidraw]]
In the example above, one client knows about the `DailyRate` price agreement type, and one does not. But, they both know `PriceAgreement`. The client that knows about it can show some more rich information. The client that is unaware just shows a general price. The key is to strike a balance between backwards compatibility while still enhancing the experience over time.