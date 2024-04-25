package generated_go_5m

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
 * This file was automatically generated by EvoMaster on 2024-04-12T16:43:02.751-03:00[America/Argentina/Buenos_Aires]
 * 
 * The generated test suite contains 7 tests
 * 
 * Covered targets: 20
 * 
 * Used time: 0h 5m 0s
 * 
 * Needed budget for current results: 41%
 * 
 * This file contains test cases that represent successful calls.
 */
type EvoMasterSuccessesTest struct {
    suite.Suite
    Controller *AppController
    BaseUrlOfSut string
}

func TestEvoMasterSuccessesSuite(t *testing.T) {
    suite.Run(t, new(EvoMasterSuccessesTest))
}


func (suite *EvoMasterSuccessesTest) SetupSuite() {
    suite.Controller = &AppController{}
    suite.Controller.SetPort(5012)
    suite.BaseUrlOfSut = suite.Controller.StartSut()
}


func (suite *EvoMasterSuccessesTest) TearDownSuite() {
    suite.Controller.StopSut()
}


func (suite *EvoMasterSuccessesTest) SetupTest() {
    suite.Controller.ResetStateOfSUT()
}




func (suite *EvoMasterSuccessesTest) Test_0() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/fisher/410/333/0.9677559094241207"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
}


func (suite *EvoMasterSuccessesTest) Test_1() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/expint/378/0.13976268290375116?EMextraParam123=_EM_6_XYZ_"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
}


func (suite *EvoMasterSuccessesTest) Test_2() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/triangle/1889207459/938/347"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
}


func (suite *EvoMasterSuccessesTest) Test_3() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/bessj/116/0.7705358800791777?EMextraParam123=_EM_4_XYZ_"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
}


func (suite *EvoMasterSuccessesTest) Test_4() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/gammq/0.8052277714737137/0.005025175992452557?EMextraParam123=_EM_7_XYZ_"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
}


func (suite *EvoMasterSuccessesTest) Test_5() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/remainder/142/545?EMextraParam123=_EM_9_XYZ_"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "_EM_10_XYZ_")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
}


func (suite *EvoMasterSuccessesTest) Test_6() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/swagger.json"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(200, res_0.StatusCode)
}
