package hamming

import "errors"

const testVersion = 6

// Distance calculates the Hamming distance for two input strings
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return -1, errors.New("Input strings not of equal length")
	}
	count := 0
	for index := range a {
		if a[index] != b[index] {
			count++
		}
	}
	return count, nil
}
