# LigoSafeEscrow
The primary payment method defined by [Transacting](../../../Transacting/).

**Subclass Of**: [LigoPaymentMethod](./)

| Property                   | Description                                                                                     | Type                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `vehicleCredentialIssuers` | A list of vehicle credential issuers that both parties agree to trust in the event of a dispute | `DID[]`                                                                        | 
| `erc792Arbitrator`         | The arbitrator used to resolve subjective disputes                                              | [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) |

## Client Compatibility
| Property                   | [Ligo MVP](../../Clients/Ligo%20MVP) |
| -------------------------- | ------------------------------------ |
| `vehicleCredentialIssuers` | 🚧                                   |
| `erc792Arbitrator`         | 🚧                                   |

---
## Appendix
### Open Questions