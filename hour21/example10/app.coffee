
class Robot
    makeTea: ->
      console.log 'Making tea.'

class Marvin extends Robot
    makeTea: ->
      console.log 'I have a brain the size of a planet'
      super 

marvin = new Marvin
marvin.makeTea()
