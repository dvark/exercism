package queenattack

import (
	"errors"
	"fmt"
	"strconv"
)

const testVersion = 2

type position struct {
	x, y int
}

func (p position) String() string {
	return fmt.Sprintf("%v %v", p.x, p.y)
}

func CanQueenAttack(input1 string, input2 string) (bool, error) {
	pos1, err1 := positonFromString(input1)
	pos2, err2 := positonFromString(input2)
	if err1 != nil || err2 != nil {
		return false, errors.New("could not convert")
	}
	if pos1.String() == pos2.String() {
		return false, errors.New("Same position")
	}

	if pos1.x == pos2.x || pos1.y == pos2.y {
		return true, nil
	}
	if absInt(pos1.x-pos2.x) == absInt(pos1.y-pos2.y) {
		return true, nil
	}
	return false, nil
}

func positonFromString(input string) (position, error) {
	if len(input) != 2 {
		return position{}, errors.New("wrong string length")
	}
	x := int(input[:1][0]) - 96
	y, err := strconv.Atoi(input[1:])
	if err != nil {
		return position{}, err
	}
	if outOfRange(x) || outOfRange(y) {
		return position{}, errors.New("position out of range")
	}
	return position{x, y}, nil
}

func outOfRange(n int) bool {
	return n < 1 || n > 8
}

func absInt(n int) int {
	if n < 0 {
		n = -n
	}
	return n
}
