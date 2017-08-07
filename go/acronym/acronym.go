package acronym

import (
	"strings"
)

const testVersion = 3

// Abbreviate takes words and returns their acronym
func Abbreviate(input string) string {
	normalizedInput := strings.Replace(input, "-", " ", -1)
	splitted := strings.Split(normalizedInput, " ")
	result := ""
	for _, value := range splitted {
		result += string(value[0])
	}
	return strings.ToUpper(result)
}
