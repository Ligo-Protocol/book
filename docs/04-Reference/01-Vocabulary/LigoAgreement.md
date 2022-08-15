# LigoAgreement
Defines an agreement between two parties to use a vehicle.

![LigoAgreement 2022-08-15 14.14.24.excalidraw](../../drawings/LigoAgreement%202022-08-15%2014.14.24.excalidraw.svg)

| Property      | Description                          | Type                                          |
| ------------- | ------------------------------------ | ---------------------------------------------- |
| `order`       | The order that started the agreement | [Order](./Order)                               |
| `reservation` | Details of the reservation           | [RentalCarReservation](./RentalCarReservation) |

## Usage
The `LigoAgreement` contains two sides of an agreement. An `order` defines the payment being provided by a customer to a seller and a `reservation` defines the service being provided by a seller to a customer.

The `LigoAgreement` defines how state can change in a booking. This is the object that can be used when resolving disputes. See [Agreements and State](../../03-Transacting/02-Defining%20Agreements/01-Agreements%20and%20State.md).

The `LigoAgreement` should be encrypted and sent to the `seller` of the `Offer` to request a booking as described in [Request a Booking](../../03-Transacting/01-Creating%20Agreements/01-Request%20a%20Booking.md).

## Examples

## Client Compatibility
| Property      | [Ligo MVP](../../Clients/Ligo%20MVP.md) |
| ------------- | --------------------------------------- |
| `order`       | 🚧                                      |
| `reservation` | 🚧                                      |

---
## Appendix
### Open Questions