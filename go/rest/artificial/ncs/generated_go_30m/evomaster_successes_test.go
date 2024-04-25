package generated_go_30m

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
 * This file was automatically generated by EvoMaster on 2024-03-13T14:48:21.080-03:00[America/Argentina/Buenos_Aires]
 * 
 * The generated test suite contains 7 tests
 * 
 * Covered targets: 15
 * 
 * Used time: 0h 30m 0s
 * 
 * Needed budget for current results: 100%
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
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/triangle/1889207459/938/347"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
}


func (suite *EvoMasterSuccessesTest) Test_2() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/bessj/116/0.7705358800791777?EMextraParam123=_EM_4_XYZ_"
    
    req, err := http.NewRequest(method, reqUrl, nil)
    suite.Nil(err, "Request creation error must be nil")
    
    req.Header.Set("x-EMextraHeader123", "")
    res_0, err := http.DefaultClient.Do(req)
    suite.NoError(err, "Request error must be nil")
    defer res_0.Body.Close()
}


func (suite *EvoMasterSuccessesTest) Test_3() {
    
    
    method := http.MethodGet
    reqUrl := "http://" + suite.BaseUrlOfSut + "/api/expint/378/0.13976268290375116?EMextraParam123=_EM_6_XYZ_"
    
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
    suite.True(strings.HasPrefix(res_0.Header.Get("Content-Type"), "application/json"))
    body_1, err := io.ReadAll(res_0.Body)
    suite.NoError(err, "Request body read error must be nil")
    
    var p fastjson.Parser
    v_body_1, err := p.ParseBytes(body_1)
    suite.NoError(err, "Parser body creation error must be nil")
    suite.Equal("2.0", string(v_body_1.GetStringBytes("swagger")))
    suite.Equal("Examples of different numerical algorithms accessible via REST", string(v_body_1.GetStringBytes("info", "description")))
    suite.Equal("1.0", string(v_body_1.GetStringBytes("info", "version")))
    suite.Equal("API for Numerical Case Study (NCS)", string(v_body_1.GetStringBytes("info", "title")))
    suite.Len(v_body_1.GetArray("schemes"), 1)
    suite.Equal("http", string(v_body_1.GetStringBytes("schemes", "0")))
    suite.Equal("/", string(v_body_1.GetStringBytes("basePath")))
    suite.Len(v_body_1.GetArray("tags"), 1)
    suite.Equal("ncs-rest", string(v_body_1.GetStringBytes("tags", "0", "name")))
    suite.Equal("Ncs Rest", string(v_body_1.GetStringBytes("tags", "0", "description")))
    suite.Len(v_body_1.GetArray("paths", "/api/bessj/{n}/{x}", "get", "tags"), 1)
    suite.Equal("ncs-rest", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "tags", "0")))
    suite.Equal("bessj", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "summary")))
    suite.Equal("bessjUsingGET", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "operationId")))
    suite.Len(v_body_1.GetArray("paths", "/api/bessj/{n}/{x}", "get", "produces"), 1)
    suite.Equal("application/json", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "produces", "0")))
    suite.Len(v_body_1.GetArray("paths", "/api/bessj/{n}/{x}", "get", "parameters"), 2)
    suite.Equal("n", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "0", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "0", "in")))
    suite.Equal("n", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "0", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/bessj/{n}/{x}", "get", "parameters", "0", "required"))
    suite.Equal("integer", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "0", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "0", "format")))
    suite.Equal("x", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "1", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "1", "in")))
    suite.Equal("x", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "1", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/bessj/{n}/{x}", "get", "parameters", "1", "required"))
    suite.Equal("number", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "1", "type")))
    suite.Equal("double", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "parameters", "1", "format")))
    suite.Equal("OK", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "responses", "200", "description")))
    suite.Equal("#/definitions/Dto", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "responses", "200", "schema", "$ref")))
    suite.Equal("Dto", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "responses", "200", "schema", "originalRef")))
    suite.Equal("Unauthorized", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "responses", "401", "description")))
    suite.Equal("Forbidden", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "responses", "403", "description")))
    suite.Equal("Not Found", string(v_body_1.GetStringBytes("paths", "/api/bessj/{n}/{x}", "get", "responses", "404", "description")))
    suite.Equal(false, v_body_1.GetBool("paths", "/api/bessj/{n}/{x}", "get", "deprecated"))
    suite.Len(v_body_1.GetArray("paths", "/api/expint/{n}/{x}", "get", "tags"), 1)
    suite.Equal("ncs-rest", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "tags", "0")))
    suite.Equal("expint", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "summary")))
    suite.Equal("expintUsingGET", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "operationId")))
    suite.Len(v_body_1.GetArray("paths", "/api/expint/{n}/{x}", "get", "produces"), 1)
    suite.Equal("application/json", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "produces", "0")))
    suite.Len(v_body_1.GetArray("paths", "/api/expint/{n}/{x}", "get", "parameters"), 2)
    suite.Equal("n", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "0", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "0", "in")))
    suite.Equal("n", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "0", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/expint/{n}/{x}", "get", "parameters", "0", "required"))
    suite.Equal("integer", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "0", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "0", "format")))
    suite.Equal("x", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "1", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "1", "in")))
    suite.Equal("x", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "1", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/expint/{n}/{x}", "get", "parameters", "1", "required"))
    suite.Equal("number", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "1", "type")))
    suite.Equal("double", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "parameters", "1", "format")))
    suite.Equal("OK", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "responses", "200", "description")))
    suite.Equal("#/definitions/Dto", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "responses", "200", "schema", "$ref")))
    suite.Equal("Dto", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "responses", "200", "schema", "originalRef")))
    suite.Equal("Unauthorized", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "responses", "401", "description")))
    suite.Equal("Forbidden", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "responses", "403", "description")))
    suite.Equal("Not Found", string(v_body_1.GetStringBytes("paths", "/api/expint/{n}/{x}", "get", "responses", "404", "description")))
    suite.Equal(false, v_body_1.GetBool("paths", "/api/expint/{n}/{x}", "get", "deprecated"))
    suite.Len(v_body_1.GetArray("paths", "/api/fisher/{m}/{n}/{x}", "get", "tags"), 1)
    suite.Equal("ncs-rest", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "tags", "0")))
    suite.Equal("fisher", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "summary")))
    suite.Equal("fisherUsingGET", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "operationId")))
    suite.Len(v_body_1.GetArray("paths", "/api/fisher/{m}/{n}/{x}", "get", "produces"), 1)
    suite.Equal("application/json", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "produces", "0")))
    suite.Len(v_body_1.GetArray("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters"), 3)
    suite.Equal("m", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "0", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "0", "in")))
    suite.Equal("m", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "0", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "0", "required"))
    suite.Equal("integer", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "0", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "0", "format")))
    suite.Equal("n", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "1", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "1", "in")))
    suite.Equal("n", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "1", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "1", "required"))
    suite.Equal("integer", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "1", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "1", "format")))
    suite.Equal("x", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "2", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "2", "in")))
    suite.Equal("x", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "2", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "2", "required"))
    suite.Equal("number", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "2", "type")))
    suite.Equal("double", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "parameters", "2", "format")))
    suite.Equal("OK", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "responses", "200", "description")))
    suite.Equal("#/definitions/Dto", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "responses", "200", "schema", "$ref")))
    suite.Equal("Dto", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "responses", "200", "schema", "originalRef")))
    suite.Equal("Unauthorized", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "responses", "401", "description")))
    suite.Equal("Forbidden", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "responses", "403", "description")))
    suite.Equal("Not Found", string(v_body_1.GetStringBytes("paths", "/api/fisher/{m}/{n}/{x}", "get", "responses", "404", "description")))
    suite.Equal(false, v_body_1.GetBool("paths", "/api/fisher/{m}/{n}/{x}", "get", "deprecated"))
    suite.Len(v_body_1.GetArray("paths", "/api/gammq/{a}/{x}", "get", "tags"), 1)
    suite.Equal("ncs-rest", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "tags", "0")))
    suite.Equal("gammq", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "summary")))
    suite.Equal("gammqUsingGET", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "operationId")))
    suite.Len(v_body_1.GetArray("paths", "/api/gammq/{a}/{x}", "get", "produces"), 1)
    suite.Equal("application/json", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "produces", "0")))
    suite.Len(v_body_1.GetArray("paths", "/api/gammq/{a}/{x}", "get", "parameters"), 2)
    suite.Equal("a", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "0", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "0", "in")))
    suite.Equal("a", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "0", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/gammq/{a}/{x}", "get", "parameters", "0", "required"))
    suite.Equal("number", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "0", "type")))
    suite.Equal("double", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "0", "format")))
    suite.Equal("x", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "1", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "1", "in")))
    suite.Equal("x", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "1", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/gammq/{a}/{x}", "get", "parameters", "1", "required"))
    suite.Equal("number", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "1", "type")))
    suite.Equal("double", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "parameters", "1", "format")))
    suite.Equal("OK", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "responses", "200", "description")))
    suite.Equal("#/definitions/Dto", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "responses", "200", "schema", "$ref")))
    suite.Equal("Dto", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "responses", "200", "schema", "originalRef")))
    suite.Equal("Unauthorized", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "responses", "401", "description")))
    suite.Equal("Forbidden", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "responses", "403", "description")))
    suite.Equal("Not Found", string(v_body_1.GetStringBytes("paths", "/api/gammq/{a}/{x}", "get", "responses", "404", "description")))
    suite.Equal(false, v_body_1.GetBool("paths", "/api/gammq/{a}/{x}", "get", "deprecated"))
    suite.Len(v_body_1.GetArray("paths", "/api/remainder/{a}/{b}", "get", "tags"), 1)
    suite.Equal("ncs-rest", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "tags", "0")))
    suite.Equal("remainder", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "summary")))
    suite.Equal("remainderUsingGET", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "operationId")))
    suite.Len(v_body_1.GetArray("paths", "/api/remainder/{a}/{b}", "get", "produces"), 1)
    suite.Equal("application/json", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "produces", "0")))
    suite.Len(v_body_1.GetArray("paths", "/api/remainder/{a}/{b}", "get", "parameters"), 2)
    suite.Equal("a", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "0", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "0", "in")))
    suite.Equal("a", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "0", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/remainder/{a}/{b}", "get", "parameters", "0", "required"))
    suite.Equal("integer", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "0", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "0", "format")))
    suite.Equal("b", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "1", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "1", "in")))
    suite.Equal("b", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "1", "description")))
    suite.Equal(true, v_body_1.GetBool("paths", "/api/remainder/{a}/{b}", "get", "parameters", "1", "required"))
    suite.Equal("integer", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "1", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "parameters", "1", "format")))
    suite.Equal("OK", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "responses", "200", "description")))
    suite.Equal("#/definitions/Dto", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "responses", "200", "schema", "$ref")))
    suite.Equal("Dto", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "responses", "200", "schema", "originalRef")))
    suite.Equal("Unauthorized", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "responses", "401", "description")))
    suite.Equal("Forbidden", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "responses", "403", "description")))
    suite.Equal("Not Found", string(v_body_1.GetStringBytes("paths", "/api/remainder/{a}/{b}", "get", "responses", "404", "description")))
    suite.Equal(false, v_body_1.GetBool("paths", "/api/remainder/{a}/{b}", "get", "deprecated"))
    suite.Len(v_body_1.GetArray("paths", "/api/triangle/{a}/{b}/{c}", "get", "tags"), 1)
    suite.Equal("ncs-rest", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "tags", "0")))
    suite.Equal("Check the triangle type of the given three edges", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "summary")))
    suite.Equal("checkTriangleUsingGET", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "operationId")))
    suite.Len(v_body_1.GetArray("paths", "/api/triangle/{a}/{b}/{c}", "get", "produces"), 1)
    suite.Equal("application/json", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "produces", "0")))
    suite.Len(v_body_1.GetArray("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters"), 3)
    suite.Equal("a", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "0", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "0", "in")))
    suite.Equal("First edge", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "0", "description")))
    suite.Equal(false, v_body_1.GetBool("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "0", "required"))
    suite.Equal("integer", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "0", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "0", "format")))
    suite.Equal("b", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "1", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "1", "in")))
    suite.Equal("Second edge", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "1", "description")))
    suite.Equal(false, v_body_1.GetBool("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "1", "required"))
    suite.Equal("integer", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "1", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "1", "format")))
    suite.Equal("c", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "2", "name")))
    suite.Equal("path", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "2", "in")))
    suite.Equal("Third edge", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "2", "description")))
    suite.Equal(false, v_body_1.GetBool("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "2", "required"))
    suite.Equal("integer", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "2", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "parameters", "2", "format")))
    suite.Equal("OK", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "responses", "200", "description")))
    suite.Equal("#/definitions/Dto", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "responses", "200", "schema", "$ref")))
    suite.Equal("Dto", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "responses", "200", "schema", "originalRef")))
    suite.Equal("Unauthorized", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "responses", "401", "description")))
    suite.Equal("Forbidden", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "responses", "403", "description")))
    suite.Equal("Not Found", string(v_body_1.GetStringBytes("paths", "/api/triangle/{a}/{b}/{c}", "get", "responses", "404", "description")))
    suite.Equal(false, v_body_1.GetBool("paths", "/api/triangle/{a}/{b}/{c}", "get", "deprecated"))
    suite.Equal("object", string(v_body_1.GetStringBytes("definitions", "Dto", "type")))
    suite.Equal("number", string(v_body_1.GetStringBytes("definitions", "Dto", "properties", "resultAsDouble", "type")))
    suite.Equal("double", string(v_body_1.GetStringBytes("definitions", "Dto", "properties", "resultAsDouble", "format")))
    suite.Equal("integer", string(v_body_1.GetStringBytes("definitions", "Dto", "properties", "resultAsInt", "type")))
    suite.Equal("int32", string(v_body_1.GetStringBytes("definitions", "Dto", "properties", "resultAsInt", "format")))
    suite.Equal("Dto", string(v_body_1.GetStringBytes("definitions", "Dto", "title")))
}
