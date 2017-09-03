package twelve

import "strings"

const testVersion = 1

var presents = [12]string{
	"and a Partridge in a Pear Tree",
	"two Turtle Doves",
	"three French Hens",
	"four Calling Birds",
	"five Gold Rings",
	"six Geese-a-Laying",
	"seven Swans-a-Swimming",
	"eight Maids-a-Milking",
	"nine Ladies Dancing",
	"ten Lords-a-Leaping",
	"eleven Pipers Piping",
	"twelve Drummers Drumming"}

var days = map[int]string{
	1:  "first",
	2:  "second",
	3:  "third",
	4:  "fourth",
	5:  "fifth",
	6:  "sixth",
	7:  "seventh",
	8:  "eighth",
	9:  "ninth",
	10: "tenth",
	11: "eleventh",
	12: "twelfth"}

// Verse creates the lyrics for the given verse number
func Verse(verseNo int) string {
	intro := "On the " + days[verseNo] + " day of Christmas my true love gave to me"
	presentList := ""
	for i := 0; i < verseNo; i++ {
		presentList = ", " + presents[i] + presentList
	}
	if verseNo == 1 {
		presentList = strings.Replace(presentList, " and ", " ", 1)
	}
	return intro + presentList + "."
}

// Song creates the full Christmas song
func Song() string {
	song := ""
	for i := 1; i <= 12; i++ {
		song += Verse(i) + "\n"
	}
	return song
}
