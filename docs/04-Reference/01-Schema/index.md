
```ipldsch
type Date string
type DID string
type AccountID string

# See https://schema.org/GeoCoordinates
type GeoCoordinates struct {
	# The latitude of a location
	latitude Float

	# The longitude of a location
	longitude Float
}

# See https://schema.org/GeoCircle
type GeoCircle struct {
	# Indicates the approximate radius of a GeoCircle in meters
	geoRadius Float

	# Indicates the GeoCoordinates at the centre of a GeoShape, e.g. GeoCircle
	geoMidpoint GeoCoordinates
}

# See https://schema.org/QuantitativeValue
type QuantitativeValue struct {
	maxValue optional Float
	minValue optional Float
	unitCode optional String
	unitText optional String
	value optional Float
}
```