package secret

const testVersion = 2

var actions = [4]string{"wink", "double blink", "close your eyes", "jump"}

// Handshake determines the handshake signals from the input number
func Handshake(number uint) []string {
	result := make([]string, 0)
	for i, action := range actions {
		if number&(uint(1)<<uint(i)) > 0 {
			result = append(result, action)
		}
	}
	if number&16 > 0 {
		reverse(result)
	}
	return result
}

// reverse reverses the order of the strings in an array in place
func reverse(stringList []string) {
	last := len(stringList) - 1
	for i := 0; i < len(stringList)/2; i++ {
		stringList[i], stringList[last-i] = stringList[last-i], stringList[i]
	}
}
