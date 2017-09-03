package erratum

const testVersion = 2

// Use tries to open a resourse, encounters errors and closes the resource
func Use(o ResourceOpener, input string) (err error) {
	resource, err := o()
	for err != nil {
		if _, ok := err.(TransientError); ok {
			resource, err = o()
		} else {
			return
		}
	}
	defer resource.Close()
	defer func() {
		if r := recover(); r != nil {
			if frobErr, ok := r.(FrobError); ok {
				resource.Defrob(r.(FrobError).defrobTag)
				err = frobErr
			} else {
				err = r.(error)
			}
		}
	}()
	resource.Frob(input)
	return
}
