# RentalCarReservation
A reservation for a rental car.

**Class**: [https://schema.org/RentalCarReservation](https://schema.org/RentalCarReservation)

| Property          | Description                                                  | Type                                                                                                                        |
| ----------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `bookingTime`     | The date and time the reservation was booked.                | [https://schema.org/DateTime](https://schema.org/DateTime)                                                                   |
| `modifiedTime`    | The date and time the reservation was modified.              | [https://schema.org/DateTime](https://schema.org/DateTime)                                                                   |
| `provider`        | The entity providing the rental. Same as `seller` of `Offer` | [https://schema.org/Organization](https://schema.org/Organization) or [https://schema.org/Person](https://schema.org/Person) |
| `reservationFor`  | The vehicle being reserved.                                  | [https://schema.org/Vehicle](https://schema.org/Vehicle)                                                                     |
| `totalPrice`      | The total price for the reservation.                         | [https://schema.org/PriceSpecification](https://schema.org/PriceSpecification)                                               |
| `underName`       | The person or organization the reservation is for.           | [https://schema.org/Organization](https://schema.org/Organization) or [https://schema.org/Person](https://schema.org/Person) |
| `dropoffLocation` | Where a rental car can be dropped off.                       | [https://schema.org/Place](https://schema.org/Place)                                                                         |
| `dropoffTime`     | When a rental car can be dropped off.                        | [https://schema.org/DateTime](https://schema.org/DateTime)                                                                   |
| `pickupLocation`  | Where a rental car can be picked up.                         | [https://schema.org/Place](https://schema.org/Place)                                                                         |
| `pickupTime`      | When a rental car can be picked up.                          | [https://schema.org/DateTime](https://schema.org/DateTime)                                                                   |

## Usage
A `RentalCarReservation` is attached to a [LigoAgreement](./LigoAgreement) to provide more details about a reservation.

## Examples

## Client Compatibility
| Property          | [Ligo MVP](../../Clients/Ligo%20MVP.md) |
| ----------------- | --------------------------------------- |
| `bookingTime`     | 🚧                                      |
| `modifiedTime`    | 🚧                                      |
| `provider`        | 🚧                                      |
| `reservationFor`  | 🚧                                      |
| `totalPrice`      | 🚧                                      |
| `underName`       | 🚧                                      |
| `dropoffLocation` | 🚧                                      |
| `dropoffTime`     | 🚧                                      |
| `pickupLocation`  | 🚧                                      |
| `pickupTime`      | 🚧                                      |



---
## Appendix
### Open Questions
- Key exchange and management