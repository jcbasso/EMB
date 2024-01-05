package imp

import (
	"fmt"
	"math"
)

const EXPINT_MAXIT float64 = 100
const EXPINT_EULER float64 = 0.5772156649
const EXPINT_FPMIN float64 = 1.0e-30
const EXPINT_EPS float64 = 1.0e-7

func Expint(n int32, x float64) (float64, error) {
	var i, ii, nm1 int32
	var a, b, c, d, del, fact, h, psi, ans float64

	nm1 = n - 1

	if n < 0 || x < 0.0 || (x == 0.0 && (n == 0 || n == 1)) {
		return 0, fmt.Errorf("error: n < 0 or x < 0")
	} else {
		if n == 0 {
			ans = math.Exp(-x) / x
		} else {
			if x == 0.0 {
				ans = 1.0 / float64(nm1)
			} else {
				if x > 1.0 {
					b = x + float64(n)
					c = 1.0 / EXPINT_FPMIN
					d = 1.0 / b
					h = d

					for i = 1; float64(i) <= EXPINT_MAXIT; i++ {
						a = float64(-i * (nm1 + i))
						b += 2.0
						d = 1.0 / (a*d + b)
						c = b + a/c
						del = c * d
						h *= del

						if math.Abs(del-1.0) < EXPINT_EPS {
							return h * math.Exp(-x), nil
						}
					}

					return 0, fmt.Errorf("continued fraction failed in expint")
				} else {
					if nm1 != 0 {
						ans = 1.0 / float64(nm1)
					} else {
						ans = -math.Log(x) - EXPINT_EULER
					}
					fact = 1.0

					for i = 1; float64(i) <= EXPINT_MAXIT; i++ {
						fact *= -x / float64(i)

						if i != nm1 {
							del = -fact / float64(i-nm1)
						} else {
							psi = -EXPINT_EULER

							for ii = 1; ii <= nm1; ii++ {
								psi += 1.0 / float64(ii)
							}

							del = fact * (-math.Log(x) + psi)
						}

						ans += del

						if math.Abs(del) < math.Abs(ans)*EXPINT_EPS {
							return ans, nil
						}
					}

					return 0, fmt.Errorf("series failed in expint")
				}
			}
		}
	}
	return ans, nil
}
