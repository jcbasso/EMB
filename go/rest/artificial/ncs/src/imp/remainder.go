package imp

// Some parts of this function aimed to test the ternary operator, though it does not exist on Go

func Remainder(a int32, b int32) int32 {
	var r int32 = 0 - 1
	var cy int32 = 0
	var ny int32 = 0

	if a == 0 {
	} else if b == 0 {
	} else if a > 0 {
		if b > 0 {
			for (a - ny) >= b {
				ny = ny + b
				r = a - ny
				cy = cy + 1
			}
		} else { // b<0
			// for (a + ny) >= math.Abs(b)
			for (a + ny) >= abs(b) {
				ny = ny + b
				r = a + ny
				cy = cy - 1
			}
		}
	} else { // a<0
		if b > 0 {
			// for math.Abs( a + ny ) >= b
			for abs(a+ny) >= b {
				ny = ny + b
				r = a + ny
				cy = cy - 1
			}
		} else {
			for b >= (a - ny) {
				ny = ny + b
				// r = math.Abs(a-ny);
				r = abs(a - ny)
				cy = cy + 1
			}
		}
	}
	return r
}
