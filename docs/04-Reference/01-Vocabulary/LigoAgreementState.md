# LigoAgreementState
Contains information needed to exchange value and services (e.g. the state of the vehicle, messages, photos, etc).

| Property         | Description                                                                                        | Type                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `startFuelLevel` | The level of the fuel tank or in the case of electric cars, the battery, at the start of the trip. | [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue) |
| `startOdometer`  | The odometer reading at the start of the trip.                                                     | [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue) |
| `startLocation`  | The location of the vehicle at the start of the trip.                                              | [https://schema.org/GeoCoordinates](https://schema.org/GeoCoordinates)       |
| `endFuelLevel` | The level of the fuel tank or in the case of electric cars, the battery, at the end of the trip. | [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue) |
| `endOdometer`  | The odometer reading at the end of the trip.                                                     | [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue) |
| `endLocation`  | The location of the vehicle at the end of the trip.                                              | [https://schema.org/GeoCoordinates](https://schema.org/GeoCoordinates)       |

## Usage
Each `LigoAgreementState` or property may contain a proof from a [LigoVehicleOracle](./LigoVehicleOracle) attesting to the state of the vehicle at a specific time.

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