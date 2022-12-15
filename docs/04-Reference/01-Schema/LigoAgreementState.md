# LigoAgreementState
Contains information needed to exchange value and services (e.g. the state of the vehicle, messages, photos, etc).

```ipldsch
type LigoAgreementState struct {  
	# The level of the fuel tank or in the case of electric cars, the battery, at the start of the trip
	startFuelLevel optional QuantitativeValue

	# The odometer reading at the start of the trip
	startOdometer optional QuantitativeValue

	# The location of the vehicle at the start of the trip
	startLocation optional GeoCoordinates

	# The level of the fuel tank or in the case of electric cars, the battery, at the end of the trip
	endFuelLevel optional QuantitativeValue

	# The odometer reading at the end of the trip
	endOdometer optional QuantitativeValue

	# The location of the vehicle at the end of the trip
	endLocation optional GeoCoordinates
}
```

## Usage

## Examples

## Client Compatibility
| Property         | [Ligo MVP](../Clients/Ligo%20MVP) |
| ---------------- | --------------------------------- |
| `startFuelLevel` | 🚧                                |
| `startOdometer`  | 🚧                                |
| `startLocation`  | 🚧                                |
| `endFuelLevel`   | 🚧                                |
| `endOdometer`    | 🚧                                |
| `endLocation`    | 🚧                                |

| Unit Code | Name          | [Ligo MVP](../Clients/Ligo%20MVP) |
| --------- | ------------- | --------------------------------- |
| `SMI`     | Statute Mile  | 🚧                                |
| `KMT`     | Kilometer     | 🚧                                |
| `LTR`     | Liters        | 🚧                                |
| `GLL`     | Gallon (US)   | 🚧                                |
| `KWH`     | Kilowatt hour | 🚧                                |

---
## Appendix
### Open Questions