# LigoSafeEscrow
The primary payment method defined by [Transacting](../../../Transacting/).

**Subclass Of**: [LigoPaymentMethod](./)

| Property                    | Description                                                                                     | Type                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `vehicleCredentialIssuers`  | A list of vehicle credential issuers that both parties agree to trust in the event of a dispute | `DID[]`                                                                        |
| `erc792Arbitrator`          | The arbitrator used to resolve subjective disputes                                              | [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) |
| `buyerSignerAccountId`      | Account ID of buyer to be signer on Safe                                                        | [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) |
| `sellerSignerAccountId`     | Account ID of seller to be signer on Safe                                                       | [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) |
| `deploymentPaymentAmount`   | Amount to pay deployer of Safe. Equivalent to `payment` in `SafeAccountConfig`                  | `Int`                                                                          |
| `deploymentPaymentReceiver` | Receiver of payment to deploy Safe. Equivalent to `paymentReceiver` in `SafeAccountConfig`      | [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) |
| `deploymentNonce`           | Random value for nonce on Safe deployment.                                                      | `String`                                                                       |
| `safeAccountId`             | Account ID of Safe                                                                              | [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md) |

## Client Compatibility
| Property                   | [Ligo MVP](../../Clients/Ligo%20MVP) |
| -------------------------- | ------------------------------------ |
| `vehicleCredentialIssuers` | 🚧                                   |
| `erc792Arbitrator`         | 🚧                                   |

---
## Appendix
### Open Questions