package src

type Dto interface{}

type IntegerDto struct {
	ResultAsInt int32 `json:"resultAsInt"`
}

type DoubleDto struct {
	ResultAsDouble float64 `json:"resultAsDouble"`
}
