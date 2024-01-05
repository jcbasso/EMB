package imp

import (
	"fmt"
	"math"
)

const GAMMQ_ITMAX = 100
const GAMMQ_EPS float64 = 3.0e-7
const GAMMQ_FPMIN = 1.0e-30

type Gammq struct {
	gamser float64
	gammcf float64
	gln    float64
}

func NewGammq() Gammq {
	return Gammq{}
}

func (g *Gammq) Exe(a float64, x float64) (float64, error) {
	if x < 0.0 || a <= 0.0 {
		return 0, fmt.Errorf("invalid arguments in routine gammq")
	}
	if x < (a + 1.0) {
		err := g.gser(a, x)
		if err != nil {
			return 0, err
		}

		return 1 - g.gamser, nil
	} else {
		err := g.gcf(a, x)
		if err != nil {
			return 0, err
		}

		return g.gammcf, nil
	}
}

func (g *Gammq) gser(a float64, x float64) error {
	var n int64
	var sum, del, ap float64

	g.gln = g.gammln(a)

	if x <= 0.0 {
		if x < 0.0 {
			return fmt.Errorf("x less than 0 in routine gser")
		}
		g.gamser = 0.0
		return nil
	} else {
		ap = a
		del = 1.0 / a
		sum = del
		for n = 1; n <= GAMMQ_ITMAX; n++ {
			ap++
			del *= x / ap
			sum += del
			if math.Abs(del) < math.Abs(sum)*GAMMQ_EPS {
				g.gamser = sum * math.Exp(-x+a*math.Log(x)-g.gln)
				return nil
			}
		}
		return fmt.Errorf("a too large, ITMAX too small in routine gser")
	}
}

func (g *Gammq) gcf(a float64, x float64) error {
	var i int64
	var an, b, c, d, del, h float64

	g.gln = g.gammln(a)
	b = x + 1.0 - a
	c = 1.0 / GAMMQ_FPMIN
	d = 1.0 / b
	h = d
	for i = 1; i <= GAMMQ_ITMAX; i++ {
		an = -float64(i) * (float64(i) - a)
		b += 2.0
		d = an*d + b
		if math.Abs(d) < GAMMQ_FPMIN {
			d = GAMMQ_FPMIN
		}
		c = b + an/c
		if math.Abs(c) < GAMMQ_FPMIN {
			c = GAMMQ_FPMIN
		}
		d = 1.0 / d
		del = d * c
		h *= del
		if math.Abs(del-1.0) < GAMMQ_EPS {
			break
		}
	}
	if i > GAMMQ_ITMAX {
		return fmt.Errorf("a too large, ITMAX too small in gcf")
	}
	g.gammcf = math.Exp(-x+a*math.Log(x)-g.gln) * h
	return nil
}

func (g *Gammq) gammln(xx float64) float64 {
	var x, y, tmp, ser float64

	cof := []float64{76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5}

	var j int64

	x = xx
	y = x
	tmp = x + 5.5
	tmp -= (x + 0.5) * math.Log(tmp)
	ser = 1.000000000190015
	for j = 0; j <= 5; j++ {
		y++
		ser += cof[j] / y
	}

	return -tmp + math.Log(2.5066282746310005*ser/x)
}
