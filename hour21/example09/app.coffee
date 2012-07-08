class Human
  constructor: (@legs = 2) ->
  growLeg: ->
    @legs++

class Horse extends Human

horse = new Horse
horse.growLeg()
horse.growLeg()
console.log "A horse has #{horse.legs} legs"
