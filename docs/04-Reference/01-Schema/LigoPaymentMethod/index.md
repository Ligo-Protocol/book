# LigoPaymentMethod
An enumeration defining the different payment methods accepted in Ligo.

```ipldsch
type LigoPaymentMethod union {
	| LigoSafeEscrow "LigoSafeEscrow"
} representation inline {
	discriminantKey "method"
}
```

## Values
- [LigoSafeEscrow](./LigoSafeEscrow)

## Client Compatibility
| Value                              | [Ligo MVP](../../Clients/Ligo%20MVP) |
| ---------------------------------- | --------------------------------------- |
| [LigoSafeEscrow](./LigoSafeEscrow) | 🚧                                      |
