# Order
An Order represents an order placed from an Offer.

**Class**: [https://schema.org/Order](https://schema.org/Order)

| Property          | Description                                                                          | Type                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `acceptedOffer`   | The offer included in the order                                                      | [Offer](./Offer)                                                                                                             |
| `customer`        | Party placing the order                                                              | [https://schema.org/Organization](https://schema.org/Organization) or [https://schema.org/Person](https://schema.org/Person) |
| `seller`          | The entity offering the rental.                                                      | [https://schema.org/Organization](https://schema.org/Organization) or [https://schema.org/Person](https://schema.org/Person) |
| `orderDate`       | Date order was placed.                                                               | [https://schema.org/DateTime](https://schema.org/DateTime)                                                                   |
| `paymentMethod`   | The payment method for the order.                                                    | [LigoPaymentMethod](./LigoPaymentMethod)                                                                                     |
| `paymentMethodId` | An identifier for the method of payment used. See specific payment method for usage. | [https://schema.org/Text](https://schema.org/Text)                                                                           |
| `paymentUrl`      | The URL for sending a payment. See specific payment method for usage.                | [https://schema.org/URL](https://schema.org/URL)                                                                             |

## Usage
An `Order` is attached to a [LigoAgreement](./LigoAgreement) to provide more details about the payment used in an agreement.

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