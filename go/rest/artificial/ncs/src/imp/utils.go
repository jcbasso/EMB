package imp

func max(a int32, b int32) int32 {
	if a > b {
		return a
	}
	return b
}

func abs(a int32) int32 {
	if a >= 0 {
		return a
	}
	return -a
}
