package raindrops

import "fmt"

const testVersion = 3

// Convert converts a number into the corresponding raindrop noise
// if it has 3, 5 or 7 as a factor
func Convert(number int) string {
	result := ""
	if number%3 == 0 {
		result += "Pling"
	}
	if number%5 == 0 {
		result += "Plang"
	}
	if number%7 == 0 {
		result += "Plong"
	}
	if result == "" {
		result = fmt.Sprintf("%v", number)
	}
	return result
}
