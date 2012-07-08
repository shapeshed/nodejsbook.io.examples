(function() {
  var Marvin, Robot, marvin,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Robot = (function() {

    function Robot() {}

    Robot.prototype.makeTea = function() {
      return console.log('Making tea.');
    };

    return Robot;

  })();

  Marvin = (function(_super) {

    __extends(Marvin, _super);

    function Marvin() {
      Marvin.__super__.constructor.apply(this, arguments);
    }

    Marvin.prototype.makeTea = function() {
      console.log('I have a brain the size of a planet');
      return Marvin.__super__.makeTea.apply(this, arguments);
    };

    return Marvin;

  })(Robot);

  marvin = new Marvin;

  marvin.makeTea();

}).call(this);
