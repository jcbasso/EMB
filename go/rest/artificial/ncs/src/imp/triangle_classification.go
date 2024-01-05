package imp

func TriangleClassify(a int32, b int32, c int32) int32 {
	if a <= 0 || b <= 0 || c <= 0 {
		return 0
	}

	if a == b && b == c {
		return 3
	}

	m := max(a, max(b, c))
	if (m == a && m-b-c >= 0) ||
		(m == b && m-a-c >= 0) ||
		(m == c && m-a-b >= 0) {
		return 0
	}

	if a == b || b == c || a == c {
		return 2
	}

	return 1
}
