# Car
A Car represents the particular car available to rent.

**Class**: [https://schema.org/Car](https://schema.org/Car)

| Property                      | Description                                                                                                                              | Type                                                               |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `modelDate`                   | The release date of a vehicle model (often used to differentiate versions of the same make and model).                                   | [https://schema.org/Date](https://schema.org/Date)                 |
| `vehicleIdentificationNumber` | The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles. | [https://schema.org/Text](https://schema.org/Text)                 |
| `manufacturer`                | The manufacturer of the vehicle.                                                                                                         | [https://schema.org/Organization](https://schema.org/Organization) |
| `brand`                       | The make/brand of the vehicle.                                                                                                           | [https://schema.org/Brand](https://schema.org/Brand) or [https://schema.org/Organization](https://schema.org/Organization) |
| `model`                       | The model of the vehicle.                                                                                                                | [https://schema.org/Text](https://schema.org/Text)                 |
| `vehicleConfiguration`        | A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.                    | [https://schema.org/Text](https://schema.org/Text)                 |

## Usage

## Examples
```json
{
	"@type": "Car",
	"modelDate": "2019",
	"vehicleIdentificationNumber": "5YJ3E1EA1KF064316",
	"manufacturer": {
		"@type": "Organization",
		"legalName": "Tesla, Inc."
	},
	"brand": {
		"@type": "Brand",
		"name": "Tesla"
	},
	"model": "Model 3",
	"vehicleConfiguration": "Standard Range Plus"	
}
```

## Client Compatibility
| Property                      | [Ligo MVP](../Clients/Ligo%20MVP) |
| ----------------------------- | --------------------------------- |
| `modelDate`                   | 🚧                                |
| `vehicleIdentificationNumber` | 🚧                                |
| `manufacturer`                | 🚧                                |
| `brand`                       | 🚧                                |
| `model`                       | 🚧                                |
| `vehicleConfiguration`        | 🚧                                |

---
## Appendix

