package clock

import "fmt"

const (
	testVersion   = 4
	minutesInHour = 60
	minutesInDay  = 24 * minutesInHour
)

// Clock holds the minutes since midnight
type Clock int

// New creates a new clock by converting to minutes and normalizing
func New(hours, minutes int) Clock {
	allMinutes := hours*minutesInHour + minutes
	return Clock((minutesInDay + allMinutes%minutesInDay) % minutesInDay)
}

// String returns the Clock formatted as hours and minutes
func (clock Clock) String() string {
	return fmt.Sprintf("%02d:%02d", clock/minutesInHour, clock%minutesInHour)
}

// Add adds minutes to a clock
func (clock Clock) Add(minutes int) Clock {
	return New(0, int(clock)+minutes)
}
