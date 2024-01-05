package imp

import (
	"fmt"
	"strings"
)

func Cookie(name string, val string, site string) string {
	name = strings.ToLower(name)
	val = strings.ToLower(val)
	site = strings.ToLower(site)
	var result int32 = 0
	if "userid" == name {
		if len(val) > 6 {
			if "user" == val[0:4] {
				result = 1
			}
		}
	} else if "session" == name {
		if ("am" == val) && ("abc.com" == site) {
			result = 1
		} else {
			result = 2
		}
	}
	return fmt.Sprintf("%d", result)
}
