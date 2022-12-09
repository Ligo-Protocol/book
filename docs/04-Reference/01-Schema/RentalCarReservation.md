# RentalCarReservation
A reservation for a rental car.

```ipldsch
# See https://schema.org/Place
type Place struct {
	geo optional GeoCoordinates
	address optional String
}

type RentalCarReservation struct {  
	# The date and time the reservation was booked
	bookingTime Date

	# The date and time the reservation was modified
	modifiedTime Date

	# The entity providing the rental. Same as `seller` of `Offer`
	provider DID

	# The vehicle being reserved
	reservationFor &Car

	# The total price for the reservation
	totalPrice PriceSpecification

	# The person or organization the reservation is for
	underName DID

	# Where a rental car can be dropped off
	dropoffLocation Place

	# When a rental car can be dropped off
	dropoffTime Date

	# Where a rental car can be picked up
	pickupLocation Place

	# When a rental car can be picked up
	pickupTime Date
}
```

## Usage
A `RentalCarReservation` is attached to a [LigoAgreement](LigoAgreement.md) to provide more details about a reservation.

## Examples

## Client Compatibility
| Property          | [Ligo MVP](../Clients/Ligo%20MVP) |
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