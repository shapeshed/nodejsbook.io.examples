var http = require('http')
  , assert = require('assert')
  , app = require('../app.js');

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
  describe('POST /api/v1/tasks', function(){
    it('should return at 200 response code on success')
    it('should return JSON')
    it('should return at 422 response code if there is a validation error')
  })
  describe('GET /api/v1/tasks/:id', function(){
    it('should return at 200 response code on success')
    it('should return JSON')
    it('should return at 404 response code if the task does not exist')
  })
  describe('PUT /api/v1/tasks/:id', function(){
    it('should return at 200 response code on success')
    it('should return JSON')
    it('should return at 404 response code if the task does not exist')
    it('should return at 422 response code if there is a validation error')
  })
  describe('DELETE /api/v1/tasks/:id', function(){
    it('should return at 200 response code on success')
    it('should return JSON')
    it('should return at 404 response code if the task does not exist')
  })
})
