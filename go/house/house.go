package house

import (
	"strings"
)

const testVersion = 1

var text = []struct{ intro, line string }{
	{"This is the house that Jack built", "that lay in the house that Jack built"},
	{"This is the malt", "that ate the malt"},
	{"This is the rat", "that killed the rat"},
	{"This is the cat", "that worried the cat"},
	{"This is the dog", "that tossed the dog"},
	{"This is the cow with the crumpled horn", "that milked the cow with the crumpled horn"},
	{"This is the maiden all forlorn", "that kissed the maiden all forlorn"},
	{"This is the man all tattered and torn", "that married the man all tattered and torn"},
	{"This is the priest all shaven and shorn", "that woke the priest all shaven and shorn"},
	{"This is the rooster that crowed in the morn", "that kept the rooster that crowed in the morn"},
	{"This is the farmer sowing his corn", "that belonged to the farmer sowing his corn"},
	{"This is the horse and the hound and the horn", ""},
}

// Verse creates the lyrics for the given verse number
func Verse(verseNo int) string {
	result := text[verseNo-1].intro + "\n"
	for i := verseNo - 2; i >= 0; i-- {
		result += text[i].line + "\n"
	}
	return strings.TrimSpace(result) + "."
}

// Song creates the full song
func Song() string {
	result := ""
	for i := range text {
		result += Verse(i+1) + "\n\n"
	}
	return strings.TrimSpace(result)
}
