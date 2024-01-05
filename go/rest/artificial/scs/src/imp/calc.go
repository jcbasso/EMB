package imp

import (
	"fmt"
	"math"
	"strings"
)

func Calc(op string, arg1 float64, arg2 float64) string {
	op = strings.ToLower(op)
	result := 0.0
	if "pi" == op { // CONSTANT OPERATOR
		result = math.Pi
	} else if "e" == op {
		result = math.E
	} else if "sqrt" == op { //UNARY OPERATOR
		result = math.Sqrt(arg1)
	} else if "log" == op {
		result = math.Log(arg1)
	} else if "sine" == op {
		result = math.Sin(arg1)
	} else if "cosine" == op {
		result = math.Cos(arg1)
	} else if "tangent" == op {
		result = math.Tan(arg1)
	} else if "plus" == op { //BINARY OPERATOR
		result = arg1 + arg2
	} else if "subtract" == op {
		result = arg1 - arg2
	} else if "multiply" == op {
		result = arg1 * arg2
	} else if "divide" == op {
		result = arg1 / arg2
	}
	return fmt.Sprintf("%f", result)
}
