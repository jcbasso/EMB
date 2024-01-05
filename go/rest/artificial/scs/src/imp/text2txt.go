package imp

import "strings"

func Text2Txt(word1 string, word2 string, word3 string) string {
	//CONVERT ENGLISH TEXT txt INTO MOBILE TELEPHONE TXT
	//BY SUBSTITUTING ABBREVIATIONS FOR COMMON WORDS
	word1 = strings.ToLower(word1)
	word2 = strings.ToLower(word2)
	word3 = strings.ToLower(word3)
	result := ""
	if word1 == "two" {
		result = "2"
	}
	if word1 == "for" || word1 == "four" {
		result = "4"
	}
	if word1 == "you" {
		result = "u"
	}
	if word1 == "and" {
		result = "n"
	}
	if word1 == "are" {
		result = "r"
	} else if word1 == "see" && word2 == "you" {
		result = "cu"
	} else if word1 == "by" && word2 == "the" && word3 == "way" {
		result = "btw"
	}
	return result
}
