package clock

import "fmt"

const testVersion = 4

// Clock holds hours and minutes.
type Clock struct {
	Hour, Minute int
}

// New creates a new clock.
func New(hour, minute int) Clock {
	for minute < 0 {
		minute += 60
		hour--
	}
	for hour < 0 {
		hour += 24
	}
	hour = (hour + minute/60) % 24
	minute = minute % 60
	return Clock{hour, minute}
}

// String returns the values of Clock as a formatted string.
func (clock Clock) String() string {
	return fmt.Sprintf("%02d:%02d", clock.Hour, clock.Minute)
}

// Add adds minutes to the clock
func (clock Clock) Add(minutes int) Clock {
	return New(clock.Hour, clock.Minute+minutes)
}
