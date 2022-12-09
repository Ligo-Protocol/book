# Car
A Car represents the particular car available to rent.
```ipldsch
type Car struct {  
	# The release date of a vehicle model (often used to differentiate versions of the same make and model)
	modelDate Date

	# The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles
	vehicleIdentificationNumber String

	# The manufacturer of the vehicle
	manufacturer String

	# The make/brand of the vehicle.
	brand String

	# The model of the vehicle.
	model String

	# A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'
	vehicleConfiguration String
}
```

## Usage

## Examples
```json
{
	"modelDate": "2019",
	"vehicleIdentificationNumber": "5YJ3E1EA1KF064316",
	"manufacturer": "Tesla, Inc.",
	"brand": "Tesla",
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

