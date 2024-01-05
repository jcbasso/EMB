package imp

import "math"

func Fisher(n int32, m int32, x float64) float64 {
	var a, b, i, j int32
	var w, y, z, zk, d, p float64

	a = 2*(m/2) - m + 2
	b = 2*(n/2) - n + 2
	w = (x * float64(m)) / float64(n)
	z = 1.0 / (1.0 + w)

	if a == 1 {
		if b == 1 {
			p = math.Sqrt(w)
			y = 0.3183098862
			d = y * z / p
			p = 2.0 * y * math.Atan(p)
		} else {
			p = math.Sqrt(w * z)
			d = 0.5 * p * z / w
		}
	} else if b == 1 {
		p = math.Sqrt(z)
		d = 0.5 * z * p
		p = 1.0 - p
	} else {
		d = z * z
		p = w * z
	}

	y = 2.0 * w / z

	if a == 1 {
		for j = b + 2; j <= n; j += 2 {
			d *= (1.0 + 1.0/float64(j-2)) * z
			p += d * y / float64(j-1)
		}
	} else {
		zk = math.Pow(z, float64((n-1)/2))
		d *= (zk * float64(n)) / float64(b)
		p = p*zk + w*z*(zk-1.0)/(z-1.0)
	}

	y = w * z
	z = 2.0 / z
	b = n - 2
	for i = a + 2; i <= m; i += 2 {
		j = i + b
		d *= (y * float64(j)) / float64(i-2)
		p -= z * d / float64(j)
	}

	if p < 0.0 {
		return 0.0
	}
	if p > 1.0 {
		return 1.0
	}

	return p
}
