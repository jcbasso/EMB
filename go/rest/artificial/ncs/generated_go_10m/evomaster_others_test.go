package generated_go_10m

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
 * This file was automatically generated by EvoMaster on 2024-03-15T17:45:28.660-03:00[America/Argentina/Buenos_Aires]
 * 
 * The generated test suite contains 5 tests
 * 
 * Covered targets: 10
 * 
 * Used time: 0h 10m 1s
 * 
 * Needed budget for current results: 100%
 * 
 * This file contains test cases that represent failed calls, but not indicative of faults.
 */
type EvoMasterOthersTest struct {
    suite.Suite
    Controller *AppController
    BaseUrlOfSut string
}

func TestEvoMasterOthersSuite(t *testing.T) {
    suite.Run(t, new(EvoMasterOthersTest))
}


func (suite *EvoMasterOthersTest) SetupSuite() {
    suite.Controller = &AppController{}
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
    suite.True(strings.HasPrefix(res_0.Header.Get("Content-Type"), "application/json"))
    body_1, err := io.ReadAll(res_0.Body)
    suite.NoError(err, "Request body read error must be nil")
    
    var p fastjson.Parser
    v_body_1, err := p.ParseBytes(body_1)
    suite.NoError(err, "Parser body creation error must be nil")
    suite.Contains(string(v_body_1.GetStringBytes()), "")
}


func (suite *EvoMasterOthersTest) Test_1() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/gammq/-3.653586879869821E8/-4905370.87675682"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(400, res_0.StatusCode)
    suite.True(strings.HasPrefix(res_0.Header.Get("Content-Type"), "application/json"))
    body_1, err := io.ReadAll(res_0.Body)
    suite.NoError(err, "Request body read error must be nil")
    
    var p fastjson.Parser
    v_body_1, err := p.ParseBytes(body_1)
    suite.NoError(err, "Parser body creation error must be nil")
    suite.Contains(string(v_body_1.GetStringBytes()), "invalid arguments in routine gammq")
}


func (suite *EvoMasterOthersTest) Test_2() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/bessj/-65506/-2380976.1822508466?EMextraParam123=_EM_54_XYZ_"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "_EM_55_XYZ_")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(400, res_0.StatusCode)
    suite.True(strings.HasPrefix(res_0.Header.Get("Content-Type"), "application/json"))
    body_1, err := io.ReadAll(res_0.Body)
    suite.NoError(err, "Request body read error must be nil")
    
    var p fastjson.Parser
    v_body_1, err := p.ParseBytes(body_1)
    suite.NoError(err, "Parser body creation error must be nil")
    suite.Contains(string(v_body_1.GetStringBytes()), "")
}


func (suite *EvoMasterOthersTest) Test_3() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/expint/-1047637/1196253.4230033692?EMextraParam123=_EM_25_XYZ_"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(400, res_0.StatusCode)
    suite.True(strings.HasPrefix(res_0.Header.Get("Content-Type"), "application/json"))
    body_1, err := io.ReadAll(res_0.Body)
    suite.NoError(err, "Request body read error must be nil")
    
    var p fastjson.Parser
    v_body_1, err := p.ParseBytes(body_1)
    suite.NoError(err, "Parser body creation error must be nil")
    suite.Contains(string(v_body_1.GetStringBytes()), "error: n < 0 or x < 0")
}


func (suite *EvoMasterOthersTest) Test_4() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/remainder/1195285877/525"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
    
    suite.Equal(400, res_0.StatusCode)
    suite.True(strings.HasPrefix(res_0.Header.Get("Content-Type"), "application/json"))
    body_1, err := io.ReadAll(res_0.Body)
    suite.NoError(err, "Request body read error must be nil")
    
    var p fastjson.Parser
    v_body_1, err := p.ParseBytes(body_1)
    suite.NoError(err, "Parser body creation error must be nil")
    suite.Contains(string(v_body_1.GetStringBytes()), "")
}