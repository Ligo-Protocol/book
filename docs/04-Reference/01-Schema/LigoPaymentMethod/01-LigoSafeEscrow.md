# LigoSafeEscrow
The primary payment method defined by [Transacting](../../../Transacting/).

```ipldsch
type LigoSafeEscrow struct {  
	# A list of vehicle credential issuers that both parties agree to trust in the event of a dispute
	vehicleCredentialIssuers [DID]

	# The arbitrator used to resolve subjective disputes
	erc792Arbitrator AccountID

	# Account ID of buyer to be signer on Safe
	buyerSignerAccountId AccountID

	# Account ID of seller to be signer on Safe
	sellerSignerAccountId AccountID

	# Amount to pay deployer of Safe. Equivalent to `payment` in `SafeAccountConfig`
	deploymentPaymentAmount Int

	# Receiver of payment to deploy Safe. Equivalent to `paymentReceiver` in `SafeAccountConfig`
	deploymentPaymentReceiver AccountID

	# Random value for nonce on Safe deployment.
	deploymentNonce String

	# Account ID of Safe
	safeAccountId AccountID
}
```

## Client Compatibility
| Property                   | [Ligo MVP](../../Clients/Ligo%20MVP) |
| -------------------------- | ------------------------------------ |
| `vehicleCredentialIssuers` | 🚧                                   |
| `erc792Arbitrator`         | 🚧                                   |

---
## Appendix
### Open Questions