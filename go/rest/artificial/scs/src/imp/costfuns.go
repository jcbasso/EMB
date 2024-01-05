package imp

import (
	"fmt"
	"strings"
)

func CostFuns(i int32, s string) string {
	var result int32 = 0

	//TEST COST FUNCTIONS
	s1 := "ba"
	s2 := "ab"
	if i == 5 { //i0
		result = 1
	}
	if i < -444 { //i1
		result = 2
	}
	if i <= -333 { //i2
		result = 3
	}
	if i > 666 { //i3
		result = 4
	}
	if i >= 555 { //i4
		result = 5
	}
	if i != -4 { //i5
		result = 6
	}
	if s == (s1 + s2) { //i6
		result = 7
	}
	//THOSE operations are not defined in Go...
	/*
		if (s  <= s1.Remove(0, 1)) { //i7
		}
		if (s  < s1.Remove(1, 1)) {  //i8
		}
	*/
	if strings.Compare(s, s2+s2+s1) > 0 { //i9
		result = 8
	}
	if strings.Compare(s, s2+s2+s1) >= 0 { //i10
		result = 9
	}
	if s != s2+s2 { //i11
		result = 10
	}

	return fmt.Sprintf("%d", result)
}
