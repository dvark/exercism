package pascal

const testVersion = 1

// Triangle creates the Pascal triangle with the given number of rows
func Triangle(amount int) [][]int {
	result := make([][]int, amount)
	for row := range result {
		result[row] = make([]int, row+1)
		result[row][0] = 1
		result[row][row] = 1
		for i := 1; i < row; i++ {
			result[row][i] = result[row-1][i-1] + result[row-1][i]
		}
	}
	return result
}
