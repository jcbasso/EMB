package imp

import (
	"fmt"
	"strings"
)

func FileSuffix(directory string, file string) string {
	var result int32 = 0

	var fileparts []string
	lastpart := 0
	var suffix string
	fileparts = strings.Split(file, ".")
	lastpart = len(fileparts) - 1
	if lastpart > 0 {
		suffix = fileparts[lastpart]
		if "text" == directory {
			if "txt" == suffix {
				result = 1
			}
		}
		if "acrobat" == directory {
			if "pdf" == suffix {
				result = 2
			}
		}
		if "word" == directory {
			if "doc" == suffix {
				result = 3
			}
		}
		if "bin" == directory {
			if "exe" == suffix {
				result = 4
			}
		}
		if "lib" == directory {
			if "dll" == suffix {
				result = 5
			}
		}
	}
	return fmt.Sprintf("%d", result)
}
