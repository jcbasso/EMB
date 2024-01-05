package imp

import "strings"

func Ordered4(w string, x string, z string, y string) string {
	result := "unordered"
	if len(w) >= 5 && len(w) <= 6 && //LIMIT LENGTH TO LIMIT PROB OF RANDOM SATISFACTION
		len(x) >= 5 && len(x) <= 6 &&
		len(y) >= 5 && len(y) <= 6 &&
		len(z) >= 5 && len(z) <= 6 {
		if strings.Compare(z, y) > 0 && strings.Compare(y, x) > 0 && strings.Compare(x, w) > 0 {
			result = "increasing"
		} else if strings.Compare(w, x) > 0 && strings.Compare(x, y) > 0 && strings.Compare(y, z) > 0 {
			result = "decreasing"
		}
	}
	return result
}
