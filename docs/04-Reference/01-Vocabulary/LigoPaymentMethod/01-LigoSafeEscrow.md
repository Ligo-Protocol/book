# LigoSafeEscrow
The primary payment method defined by [Transacting](../../../Transacting/).

**Subclass Of**: [LigoPaymentMethod](./)

| Property           | Description                                             | Type                                                                           |
| ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `vehicleOracle`    | The oracle used as the source of truth for vehicle data | [LigoVehicleOracle](../LigoVehicleOracle/)                                     |
| `erc792Arbitrator` | The arbitrator used to resolve subjective disputes      | [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) |

## Client Compatibility
| Property           | [Ligo MVP](../../Clients/Ligo%20MVP.md) |
| ------------------ | --------------------------------------- |
| `vehicleOracle`    | 🚧                                      |
| `erc792Arbitrator` | 🚧                                      |

---
## Appendix
### Open Questions