# Offer
An Offer represents an offer from a vehicle owner to rent out a vehicle.

**Class**: [https://schema.org/OfferForLease](https://schema.org/OfferForLease)

| Property                    | Description                                                                                                      | Type                                                                                                                         |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `description`               | Description of the offer.                                                                                        | [https://schema.org/Text](https://schema.org/Text)                                                                           |
| `image`                     | Image(s) of specific vehicle being offered.                                                                      | [https://schema.org/URL](https://schema.org/URL)                                                                             |
| `itemOffered`               | The vehicle being offered.                                                                                       | [Car](./Car)                                                                                                                 |
| `seller`                    | The entity offering the rental.                                                                                  | [https://schema.org/Organization](https://schema.org/Organization) or [https://schema.org/Person](https://schema.org/Person) |
| `areaServed`                | The approximate area where the vehicle is available to pickup. Can be used to obfuscate the precise location.    | [https://schema.org/GeoShape](https://schema.org/GeoShape)                                                                   |
| `priceSpecification`        | Available prices of an offer.                                                                                    | [https://schema.org/PriceSpecification](https://schema.org/PriceSpecification)                                               |
| `acceptedPaymentMethod`     | The payment method(s) accepted by seller for this offer.                                                         | [LigoPaymentMethod](./LigoPaymentMethod)                                                                                     |
| `advanceBookingRequirement` | The amount of time that is required between accepting the offer and the actual usage of the resource or service. | [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue)                                                 |
| `eligibleQuantity`          | The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. | [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue)                                                 |

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
  "@type": "OfferForLease",
  "eligibleQuantity": {
    "@type": "QuantitativeValue",
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