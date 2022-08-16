# PriceSpecification
A PriceSpecification defines a particular price and handles a variety of complicated pricing schemes.

**Class**: [https://schema.org/PriceSpecification](https://schema.org/PriceSpecification)

### Base
| Property           | Description                                                                                                      | Type                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `price`            | The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.      | [https://schema.org/Number](https://schema.org/Number) or [https://schema.org/Text](https://schema.org/Text) |
| `priceCurrency`    | The currency of the price, or a price component when attached to PriceSpecification and its subtypes.            | [https://schema.org/Text](https://schema.org/Text)                                                           |
| `eligibleQuantity` | The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. | [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue)                                 |
| `validFrom`        | The date when the item becomes valid.                                                                            | [https://schema.org/DateTime](https://schema.org/DateTime)                                                   |
| `validThrough`     | The date after when the item is not valid.                                                                       | [https://schema.org/DateTime](https://schema.org/DateTime)                                                   |

### UnitPriceSpecification
| Property                    | Description                                                                                                      | Type                                                                                                                         |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `referenceQuantity`         | The reference quantity for which a certain price applies.                                                        | [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue)                                                                                                                 |

## Usage

## Examples
### Base Price of $25 Per Day
```json
{
  "@type": "UnitPriceSpecification",
  "price": 25,
  "priceCurrency": "USD",
  "referenceQuantity": {
    "@type": "QuantitativeValue",
    "value": 1,
    "unitCode": "DAY"
  }
}
```

### Base Price of $0.25 per kilometer
```json
{
  "@type": "UnitPriceSpecification",
  "price": 0.25,
  "priceCurrency": "USD",
  "referenceQuantity": {
    "@type": "QuantitativeValue",
    "value": 1,
    "unitCode": "KMT"
  }
}
```

### Base Price of $25 Per Day + $0.25 per kilometer over 1000
```json
[
	{
	  "@type": "UnitPriceSpecification",
	  "price": 25,
	  "priceCurrency": "USD",
	  "referenceQuantity": {
	    "@type": "QuantitativeValue",
	    "value": 1,
	    "unitCode": "DAY"
	  }
	},
	{
	  "@type": "UnitPriceSpecification",
	  "price": 0.25,
	  "priceCurrency": "USD",
	  "eligibleQuantity": {
	    "@type": "QuantitativeValue",
	    "minValue": 1000,
	    "unitCode": "KMT"
	  },
	  "referenceQuantity": {
	    "@type": "QuantitativeValue",
	    "value": 1,
	    "unitCode": "KMT"
	  }
	}
]
```

### Base Price of $5 per hour
```json
{
  "@type": "UnitPriceSpecification",
  "price": 5,
  "priceCurrency": "USD",
  "referenceQuantity": {
    "@type": "QuantitativeValue",
    "value": 1,
    "unitCode": "HUR"
  }
}
```

### Different price per day
$25 per day from 2022-07-01 to 2022-07-10 and $30 per day after that.

```json
[
	{
	  "@type": "UnitPriceSpecification",
	  "price": 25,
	  "priceCurrency": "USD",
	  "validFrom": "2022-07-01T00:00:00Z",
	  "validThrough": "2022-07-10T00:00:00Z",
	  "referenceQuantity": {
	    "@type": "QuantitativeValue",
	    "value": 1,
	    "unitCode": "DAY"
	  }
	},
	{
	  "@type": "UnitPriceSpecification",
	  "price": 30,
	  "priceCurrency": "USD",
	  "validFrom": "2022-07-10T00:00:00Z",
	  "referenceQuantity": {
	    "@type": "QuantitativeValue",
	    "value": 1,
	    "unitCode": "DAY"
	  }
	}
]
```

## Client Compatibility

| Property            | [Ligo MVP](../Clients/Ligo%20MVP) |
| ------------------- | --------------------------------------- |
| `price`             | 🚧                                      |
| `priceCurrency`     | 🚧                                      |
| `eligibleQuantity`  | 🚧                                      |
| `referenceQuantity` | 🚧                                      |
| `validFrom`         | 🚧                                      |
| `validThrough`      | 🚧                                      |

| Unit Code | Name         | [Ligo MVP](../Clients/Ligo%20MVP) |
| --------- | ------------ | --------------------------------------- |
| `DAY`     | Day          | 🚧                                      |
| `HUR`     | Hour         | 🚧                                      |
| `SMI`     | Statute Mile | 🚧                                      |
| `KMT`     | Kilometer    | 🚧                                      |

---
## Appendix
### To Do
- Protocol fee
- Delivery fee
- Extras
- VAT or sales tax
- Discounts
- Insurance or protection
- Security deposit
- Reimbursements and post trip fees
	- Cleaning
	- Smoking
	- Late returns
	- Refueling
	- Tickets
	- Road tolls