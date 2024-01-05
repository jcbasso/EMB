package imp

import "fmt"

func Pat(txt string, pat string) string {
	//SEARCH txt FOR FIRST OCCURRENCE OF pat OR REVERSE OF pat
	//IF pat (STRING OF LENGTH AT LEAST 3) OCCURS IN txt, RTN 1
	//IF REVERSE OF pat OCCURS IN txt, RTN 2
	//IF pat AND REVERSE OF pat OCCURS IN txt, RTN 3
	//IF PALINDROME CONSISTING OF pat FOLLOWED BY REVERSE pat OCCURS IN txt, RTN 4
	//IF PALINDROME CONSISTING OF REVERSE pat FOLLOWED pat OCCURS IN txt, RTN 5
	var result int = 0
	var i int = 0
	var j int = 0
	var txtlen int = len(txt)
	var patlen int = len(pat)
	var possmatch string

	if patlen > 2 {
		patrev := reverse(pat)
		for i = 0; i <= txtlen-patlen; i++ {
			if string(txt[i]) == string(pat[0]) {
				possmatch = txt[i : i+patlen]
				if possmatch == pat {
					//FOUND pat
					result = 1
					//CHECK IF txt CONTAINS REVERSE pat
					for j = i + patlen; j <= txtlen-patlen; j++ {
						if string(txt[j]) == string(patrev[0]) {
							possmatch = txt[j : j+patlen]
							if possmatch == patrev {
								if j == i+patlen {
									return fmt.Sprintf("%d", i) //4
								} else {
									return fmt.Sprintf("%d", i) //3
								}
							}
						}
					}
				}
			} else if string(txt[i]) == string(patrev[0]) {
				possmatch = txt[i : i+patlen]
				if possmatch == patrev {
					//FOUND pat REVERSE
					result = 2
					//CHECK IF txt CONTAINS pat
					for j = i + patlen; j <= txtlen-patlen; j++ {
						if string(txt[j]) == string(pat[0]) {
							possmatch = txt[j : j+patlen]
							if possmatch == pat {
								if j == i+patlen {
									return fmt.Sprintf("%d", i) //5;
								} else {
									return fmt.Sprintf("%d", i) //3;
								}
							}
						}
					}
				}
			}
		} //pat NOR REVERSE FOUND
	}
	return fmt.Sprintf("%d", result)
}

func reverse(s string) string {
	//RTN REVERSE OF s
	slen := len(s)
	if slen < 2 {
		return s
	}
	result := ""
	for i := slen - 1; i >= 0; i-- {
		result += string(s[i])
	}
	return result
}
