var http = require('http');
var assert = require('assert');
var app = require('../app.js');

describe('api v1', function(){
  describe('GET /api/v1/tasks', function(){
    it('should return a 200 response', function(done){
      http.get({ path: '/api/v1/tasks', port: 3001 }, function(res){
        assert.equal(res.statusCode, 
           200,
           'Expected: 200 Actual: ' + res.statusCode );
        done();
      })
    })
    it('should return JSON', function(done){
      http.get({ path: '/api/v1/tasks', port: 3001 }, function(res){
        assert.equal(res.headers["content-type"], 
           "application/json; charset=utf-8", 
           'Expected: application/json; charset=utf-8 Actual: ' + res.headers["content-type"]);
        done();
      })
    })
  })
})
