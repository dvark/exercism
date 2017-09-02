package bob

import "strings"

const testVersion = 3

// Hey returns Bobs response to the input
func Hey(input string) string {
	input = strings.TrimSpace(input)
	if input == "" {
		return "Fine. Be that way!"
	}
	if strings.ToUpper(input) == input && strings.ToLower(input) != input {
		return "Whoa, chill out!"
	}
	if strings.HasSuffix(input, "?") {
		return "Sure."
	}
	return "Whatever."
}
