package diffsquares

const testVersion = 1

// SquareOfSums calculates the sum from 1 up to a given number and returns the square of that sum
func SquareOfSums(max int) int {
	return max * max * (max + 1) * (max + 1) / 4
}

// SumOfSquares sums the squares of numbers from one up to a given number
func SumOfSquares(max int) int {
	return max * (max + 1) * (2*max + 1) / 6
}

// Difference calculates the difference of the SquareOfSums and SumOfSquares
func Difference(max int) int {
	return SquareOfSums(max) - SumOfSquares(max)
}
