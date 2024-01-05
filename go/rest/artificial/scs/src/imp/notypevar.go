package imp

import (
	"fmt"
	"strings"
)

func NotyPevar(i int32, s string) string {
	var x int32
	var y int32
	var result int32 = 0
	x = i
	y = x
	if x+y == 56 { //i0
		result = x
	}
	xs := "hello"
	if fmt.Sprintf("%s%d", xs, y) == "hello7" { //i1
		result = 1
	}
	if strings.Compare(xs, s) < 0 { //i2
		result = 2
	}
	x = 5
	if y > x { //i3
		result = 3
	}
	return fmt.Sprintf("%d", result)
}
