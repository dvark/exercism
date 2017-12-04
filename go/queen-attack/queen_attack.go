package queenattack

import (
	"errors"
)

const testVersion = 2

// CanQueenAttack checks whether the queens on the given fields can attack each other
func CanQueenAttack(white string, black string) (bool, error) {
	if !valid(white) || !valid(black) {
		return false, errors.New("invalid input")
	}
	// same position
	if white == black {
		return false, errors.New("same position")
	}
	// same row or column
	if white[0] == black[0] || white[1] == black[1] {
		return true, nil
	}
	// same diagonal
	if distance(white[0], black[0]) == distance(white[1], black[1]) {
		return true, nil
	}
	return false, nil
}

func valid(pos string) bool {
	if len(pos) != 2 {
		return false
	}
	if pos[0] < 'a' || pos[0] > 'h' {
		return false
	}
	if pos[1] < '1' || pos[1] > '8' {
		return false
	}
	return true
}

func distance(a, b byte) byte {
	if a < b {
		a, b = b, a
	}
	return a - b
}
