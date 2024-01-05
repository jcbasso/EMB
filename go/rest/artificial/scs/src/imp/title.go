package imp

import (
	"fmt"
	"strings"
)

func Title(sex string, title string) string {
	//CHECK PERSONAL TITLE CONSISTENT WITH SEX
	sex = strings.ToLower(sex)
	title = strings.ToLower(title)
	result := -1
	if "male" == sex {
		if "mr" == title ||
			"dr" == title ||
			"sir" == title ||
			"rev" == title ||
			"rthon" == title ||
			"prof" == title {
			result = 1
		}
	} else if "female" == sex {
		if "mrs" == title ||
			"miss" == title ||
			"ms" == title ||
			"dr" == title ||
			"lady" == title ||
			"rev" == title ||
			"rthon" == title ||
			"prof" == title {
			result = 0
		}
	} else if "none" == sex {
		if "dr" == title ||
			"rev" == title ||
			"rthon" == title ||
			"prof" == title {
			result = 2
		}
	}
	return fmt.Sprintf("%d", result)
}
