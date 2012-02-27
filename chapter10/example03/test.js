exports.firstTest = function(test){
  test.expect(1);
  test.strictEqual("hello", "hello");
  test.done();
};
exports.secondTest = function(test){
  test.expect(1);
  test.strictEqual("hello", "there");
  test.done();
};
