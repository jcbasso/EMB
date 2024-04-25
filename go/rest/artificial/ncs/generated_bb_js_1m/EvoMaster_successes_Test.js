const superagent = require("superagent");
const EM = require("evomaster-client-js").EMTestUtils;
jest.setTimeout(60000);




/**
 * This file was automatically generated by EvoMaster on 2024-04-24T11:09:29.914-03:00[America/Argentina/Buenos_Aires]
 * 
 * The generated test suite contains 7 tests
 * 
 * Covered targets: 15
 * 
 * Used time: 0h 1m 58s
 * 
 * Needed budget for current results: 72%
 * 
 * This file contains test cases that represent successful calls.
 */

const baseUrlOfSut = "http://localhost:5001";


beforeAll( async () => {
});








test("test_0", async () => {
    
    const res_0 = await superagent
            .get(baseUrlOfSut + "/api/expint/522/0.31531501628136305").set('Accept', "application/json")
            .ok(res => res.status);
    
    expect(res_0.status).toBe(200);
    expect(res_0.header["content-type"].startsWith("application/json")).toBe(true);
    expect(res_0.body.resultAsDouble).toBe(0.0013994566121987892);
});


test("test_1", async () => {
    
    const res_0 = await superagent
            .get(baseUrlOfSut + "/api/remainder/880/678").set('Accept', "application/json")
            .ok(res => res.status);
    
    expect(res_0.status).toBe(200);
    expect(res_0.header["content-type"].startsWith("application/json")).toBe(true);
    expect(res_0.body.resultAsInt).toBe(202.0);
});


test("test_2", async () => {
    
    const res_0 = await superagent
            .get(baseUrlOfSut + "/api/triangle/379/713/762").set('Accept', "application/json")
            .ok(res => res.status);
    
    expect(res_0.status).toBe(200);
    expect(res_0.header["content-type"].startsWith("application/json")).toBe(true);
    expect(res_0.body.resultAsInt).toBe(1.0);
});


test("test_3", async () => {
    
    const res_0 = await superagent
            .get(baseUrlOfSut + "/api/fisher/801/519/0.5267259880752357").set('Accept', "application/json")
            .ok(res => res.status);
    
    expect(res_0.status).toBe(200);
    expect(res_0.header["content-type"].startsWith("application/json")).toBe(true);
    expect(res_0.body.resultAsDouble).toBe(0.0);
});


test("test_4", async () => {
    
    const res_0 = await superagent
            .get(baseUrlOfSut + "/api/bessj/445/0.8296912233491993").set('Accept', "application/json")
            .ok(res => res.status);
    
    expect(res_0.status).toBe(200);
    expect(res_0.header["content-type"].startsWith("application/json")).toBe(true);
    expect(res_0.body.resultAsDouble).toBe(0.0);
});


test("test_5", async () => {
    
    const res_0 = await superagent
            .get(baseUrlOfSut + "/api/gammq/0.5722295925058892/0.5559666311129164").set('Accept', "application/json")
            .ok(res => res.status);
    
    expect(res_0.status).toBe(200);
    expect(res_0.header["content-type"].startsWith("application/json")).toBe(true);
    expect(res_0.body.resultAsDouble).toBe(0.33570575629215516);
});


test("test_6", async () => {
    
    const res_0 = await superagent
            .get(baseUrlOfSut + "/swagger.json").set('Accept', "*/*")
            .ok(res => res.status);
    
    expect(res_0.status).toBe(200);
});