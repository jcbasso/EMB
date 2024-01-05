package imp

import "regexp"

func Regex(txt string) string {
	//MATCH txt AGAINST VARIOUS REGULAR EXPRESSIONS
	//ALL OF txt MUST MATCH
	digit := "((0)|(1)|(2)|(3)|(4)|(5)|(6)|(7)|(8)|(9))"
	fp := digit + digit + "*\\." + digit + digit + "*"
	fpe := fp + "e((\\+)|(-))" + digit + digit

	alpha := "((a)|(b)|(c)|(d)|(e)|(f)|(g)|(h)|(i)|(j)|(k)|(l)|(m)|(n)|(o)|(p)|(q)|(r)|(s)|(t)|(u)|(v)|(w)|(x)|(y)|(z)|(_)|(-))"
	iden := alpha + "(" + alpha + "|" + digit + ")*"
	url := "((http)|(ftp)|(afs)|(gopher))//:" + iden + "/" + iden
	day := "((mon)|(tue)|(wed)|(thur)|(fri)|(sat)|(sun))"
	month := "((jan)|(feb)|(mar)|(apr)|(may)|(jun)|(jul)|(aug)|(sep)|(oct)|(nov)|(dec))"
	date := day + digit + digit + month

	matched, _ := regexp.Match(url, []byte(txt))
	if matched {
		return "url"
	}

	matched, _ = regexp.Match(date, []byte(txt))
	if matched {
		return "date"
	}

	matched, _ = regexp.Match(fpe, []byte(txt))
	if matched {
		return "fpe"
	}

	return "none"
}
