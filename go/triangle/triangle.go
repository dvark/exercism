package triangle

import "math"

const testVersion = 3

const (
	// NaT represents the Kind "not a triangle"
	NaT = iota
	// Equ represents the Kind "equilateral"
	Equ
	// Iso represents the Kind "isosceles"
	Iso
	// Sca represents the Kind "scalene"
	Sca
)

// Kind represent the type of triangle as integer (see constants above)
type Kind int

// KindFromSides uses the side length to determine the type of the triangle with these side length
func KindFromSides(a, b, c float64) Kind {
	if isInvalid(a) || isInvalid(b) || isInvalid(c) {
		return Kind(NaT)
	}
	if (a+b < c) || (b+c < a) || (a+c < b) || a+b+c <= 0 {
		return Kind(NaT)
	}
	if a == b && b == c {
		return Kind(Equ)
	}
	if a == b || a == c || c == b {
		return Kind(Iso)
	}
	return Kind(Sca)
}

// isInvalid checks whether the given float is NaN or positive/negative infinity
func isInvalid(number float64) bool {
	return math.IsNaN(number) || math.IsInf(number, 0)
}
