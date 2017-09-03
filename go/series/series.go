package series

const testVersion = 2

func All(length int, input string) []string {
	result := []string{}
	for i := 0; i <= len(input)-length; i++ {
		result = append(result, input[i:i+length])
	}
	return result
}

func UnsafeFirst(length int, input string) string {
	return input[:length]
}

func First(length int, input string) (string, bool) {
	if length > len(input) {
		return "", false
	}
	return UnsafeFirst(length, input), true
}
