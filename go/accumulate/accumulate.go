package accumulate

const testVersion = 1

// Accumulate applies a function to all elements of the array
func Accumulate(input []string, fn func(string) string) []string {
	result := make([]string, len(input))
	for i, value := range input {
		result[i] = fn(value)
	}
	return result
}
