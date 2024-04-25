package generated_go_1m

import (
    "github.com/stretchr/testify/suite"
    "github.com/valyala/fastjson"
    "io"
    "net/http"
    "strings"
    "testing"
)

// These vars are added so Go compiler doesn't complain if imports aren't used
var _ *fastjson.Object = nil
var _ *io.Reader = nil
var _ *strings.Reader = nil




/**
 * This file was automatically generated by EvoMaster on 2024-03-14T14:30:56.784-03:00[America/Argentina/Buenos_Aires]
 * 
 * The generated test suite contains 5 tests
 * 
 * Covered targets: 10
 * 
 * Used time: 0h 1m 0s
 * 
 * Needed budget for current results: 100%
 * 
 * This file contains test cases that represent failed calls, but not indicative of faults.
 */
type EvoMasterOthersTest struct {
    suite.Suite
    Controller AppController
    BaseUrlOfSut string
}

func TestEvoMasterOthersSuite(t *testing.T) {
    suite.Run(t, new(EvoMasterOthersTest))
}


func (suite *EvoMasterOthersTest) SetupSuite() {
    suite.Controller = AppController{}
    suite.Controller.SetPort(5012)
    suite.BaseUrlOfSut = suite.Controller.StartSut()
}


func (suite *EvoMasterOthersTest) TearDownSuite() {
    suite.Controller.StopSut()
}


func (suite *EvoMasterOthersTest) SetupTest() {
    suite.Controller.ResetStateOfSUT()
}




func (suite *EvoMasterOthersTest) Test_0() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/fisher/16794/333/0.96776"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(400, res_0.StatusCode)
    suite.Equal(http.NoBody, res_0.Body)
}


func (suite *EvoMasterOthersTest) Test_1() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/bessj/116/0.7705358800791777?EMextraParam123=_EM_4_XYZ_"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(400, res_0.StatusCode)
    suite.Equal(http.NoBody, res_0.Body)
}


func (suite *EvoMasterOthersTest) Test_2() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/expint/-8388029/1.671011162782363E7"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "_EM_169_XYZ_")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(400, res_0.StatusCode)
    suite.Equal(http.NoBody, res_0.Body)
}


func (suite *EvoMasterOthersTest) Test_3() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/gammq/0.8052277714737137/0.005025175992452557?EMextraParam123=_EM_7_XYZ_"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(400, res_0.StatusCode)
    suite.Equal(http.NoBody, res_0.Body)
}


func (suite *EvoMasterOthersTest) Test_4() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/remainder/512330544/197"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(400, res_0.StatusCode)
    suite.Equal(http.NoBody, res_0.Body)
}