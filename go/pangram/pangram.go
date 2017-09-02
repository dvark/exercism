package pangram

import (
	"strings"
)

const (
	testVersion       = 1
	lettersInAlphabet = 26
)

// IsPangram checks whether the input string contains all letters of the alphabet
func IsPangram(input string) bool {
	letters := make(map[rune]bool)
	for _, letter := range strings.ToLower(input) {
		if letter >= 'a' && letter <= 'z' {
			letters[letter] = true
		}
	}
	return len(letters) == lettersInAlphabet
}
