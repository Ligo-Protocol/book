# PriceSpecification
A PriceSpecification defines a particular price and handles a variety of complicated pricing schemes. See [https://schema.org/PriceSpecification](https://schema.org/PriceSpecification)

```ipldsch
# See https://schema.org/PriceSpecification
type PriceSpecification struct {  
	# The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes
	price Float

	# The currency of the price, or a price component when attached to PriceSpecification and its subtypes
	priceCurrency String

	# The interval and unit of measurement of ordering quantities for which the offer or price specification is valid
	eligibleQuantity optional QuantitativeValue

	# The date when the item becomes valid
	validFrom optional Date

	# The date after when the item is not valid
	validThrough optional Date

	# The reference quantity for which a certain price applies
	referenceQuantity optional QuantitativeValue

	# This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property
	billingIncrement optional Float
}
```

## Usage

## Examples
### Base Price of $25 Per Day
```json
{
  "price": 25,
  "priceCurrency": "USD",
  "referenceQuantity": {
    "value": 1,
    "unitCode": "DAY"
  }
}
```

### Base Price of $0.25 per kilometer
```json
{
  "price": 0.25,
  "priceCurrency": "USD",
  "referenceQuantity": {
    "value": 1,
    "unitCode": "KMT"
  }
}
```

### Base Price of $25 Per Day + $0.25 per kilometer over 1000
```json
[
	{
	  "price": 25,
	  "priceCurrency": "USD",
	  "referenceQuantity": {
	    "value": 1,
	    "unitCode": "DAY"
	  }
	},
	{
	  "price": 0.25,
	  "priceCurrency": "USD",
	  "eligibleQuantity": {
	    "minValue": 1000,
	    "unitCode": "KMT"
	  },
	  "referenceQuantity": {
	    "value": 1,
	    "unitCode": "KMT"
	  }
	}
]
```

### Base Price of $5 per hour
```json
{
  "price": 5,
  "priceCurrency": "USD",
  "referenceQuantity": {
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
	  "price": 25,
	  "priceCurrency": "USD",
	  "validFrom": "2022-07-01T00:00:00Z",
	  "validThrough": "2022-07-10T00:00:00Z",
	  "referenceQuantity": {
	    "value": 1,
	    "unitCode": "DAY"
	  }
	},
	{
	  "price": 30,
	  "priceCurrency": "USD",
	  "validFrom": "2022-07-10T00:00:00Z",
	  "referenceQuantity": {
	    "value": 1,
	    "unitCode": "DAY"
	  }
	}
]
```

### Month-to-month subscription of $1000
```json
{
  "price": 1000,
  "priceCurrency": "USD",
  "billingIncrement": 1,
  "unitCode": "MON"
}
```

### Discount for 3+ days
```json
[
	{
	  "price": 25,
	  "priceCurrency": "USD",
	  "eligibleQuantity": {
	    "maxValue": 3,
	    "unitCode": "DAY"
	  },
	  "referenceQuantity": {
	    "value": 1,
	    "unitCode": "DAY"
	  }
	},
	{
	  "price": 20,
	  "priceCurrency": "USD",
	  "eligibleQuantity": {
	    "minValue": 3,
	    "unitCode": "DAY"
	  },
	  "referenceQuantity": {
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