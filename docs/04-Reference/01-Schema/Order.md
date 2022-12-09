# Order
An Order represents an order placed from an Offer.

```ipldsch
type Order struct {  
	# The offer included in the order
	acceptedOffer &Offer

	# Party placing the order
	customer DID

	# The entity offering the rental
	seller DID

	# Date order was placed
	orderDate Date

	# The payment method for the order
	paymentMethod LigoPaymentMethod

	# An identifier for the method of payment used. See specific payment method for usage
	paymentMethodId optional String

	# The URL for sending a payment. See specific payment method for usage
	paymentUrl optional String
}
```

## Usage
An `Order` is attached to a [LigoAgreement](LigoAgreement.md) to provide more details about the payment used in an agreement.

## Examples

## Client Compatibility
| Property          | [Ligo MVP](../Clients/Ligo%20MVP) |
| ----------------- | --------------------------------------- |
| `acceptedOffer`   | 🚧                                      |
| `customer`        | 🚧                                      |
| `seller`          | 🚧                                      |
| `orderDate`       | 🚧                                      |
| `paymentMethod`   | 🚧                                      |
| `paymentMethodId` | 🚧                                      |
| `paymentUrl`      | 🚧                                      |

---
## Appendix
### Open Questions
-   How to reference Gnosis Safe?
    -   `paymentURL` or `paymentMethodId`