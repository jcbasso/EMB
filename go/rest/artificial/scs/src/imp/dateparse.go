package imp

import (
	"fmt"
	"strings"
)

func DateParse(dayname string, monthname string) string {
	var result int32 = 0
	//int month = -1;
	dayname = strings.ToLower(dayname)
	monthname = strings.ToLower(monthname)

	if "mon" == dayname ||
		"tue" == dayname ||
		"wed" == dayname ||
		"thur" == dayname ||
		"fri" == dayname ||
		"sat" == dayname ||
		"sun" == dayname {
		result = 1
	}
	if "jan" == monthname {
		result += 1
	}
	if "feb" == monthname {
		result += 2
	}
	if "mar" == monthname {
		result += 3
	}
	if "apr" == monthname {
		result += 4
	}
	if "may" == monthname {
		result += 5
	}
	if "jun" == monthname {
		result += 6
	}
	if "jul" == monthname {
		result += 7
	}
	if "aug" == monthname {
		result += 8
	}
	if "sep" == monthname {
		result += 9
	}
	if "oct" == monthname {
		result += 10
	}
	if "nov" == monthname {
		result += 11
	}
	if "dec" == monthname {
		result += 12
	}

	return fmt.Sprintf("%d", result)
}
