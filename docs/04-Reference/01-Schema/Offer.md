# Offer
An Offer represents an offer from a vehicle owner to rent out a vehicle.

```ipldsch
type Offer struct {  
	# Description of the offer
	description String

	# Image(s) of specific vehicle being offered
	images [&ImageObject]

	# The vehicle being offered
	itemOffered &Car

	# The entity offering the rental
	seller DID

	# The approximate area where the vehicle is available to pickup. Can be used to obfuscate the precise location
	areaServed GeoCircle

	# Available prices of an offer
	priceSpecifications [PriceSpecification]

	# The payment method(s) accepted by seller for this offer
	acceptedPaymentMethods [LigoPaymentMethod]

	# The amount of time that is required between accepting the offer and the actual usage of the resource or service
	advanceBookingRequirement optional QuantitativeValue

	# The interval and unit of measurement of ordering quantities for which the offer or price specification is valid
	eligibleQuantity optional QuantitativeValue
}
```

## Usage
Offers are the main entity used for discovering rentals as well as setting the foundation of an agreement.

- Marketplaces can discover and show offers
- Oracles can view the offer to resolve disputes

### Private Sharing
Offers can still be made private by using encryption and/or private channels to communicate offers. Offers do not inherently have to be discovered or indexed publicly.

## Examples
### Eligible Quantities
#### Minimum of 5 day booking
```json
{
  "eligibleQuantity": {
    "minValue": 5,
    "unitCode": "DAY"
  }
}
```

## Client Compatibility

| Property                    | [Ligo MVP](../Clients/Ligo%20MVP) |
| --------------------------- | --------------------------------------- |
| `description`               | 🚧                                      |
| `image`                     | 🚧                                      |
| `itemOffered`               | 🚧                                      |
| `seller`                    | 🚧                                      |
| `areaServed`                | 🚧                                      |
| `priceSpecification`        | 🚧                                      |
| `acceptedPaymentMethod`     | 🚧                                      |
| `advanceBookingRequirement` | 🚧                                      |

---
## Appendix
### Open Questions
- Currencies
	- `priceCurrency` or in `priceSpecification`
		- `priceCurrency` lists all accepted currencies
		- `priceSpecification` lists the price in a single currency
- Cleaning fees?