'<button id="start">Press to start</button>'

var startButton = document.getElementById('start')

startButton.addEventListener('click', function () {
  var getConfirmation = window.confirm('Ready to start?')
  if (getConfirmation === true) {
    window.alert('Awesome! let\'s go.')
    var petChoice = window.prompt('What is your ideal pet (cat, dog, or snake)?')
    var bestPet = petChoice.toLowerCase().trim()
    if (bestPet === 'cat') {
      window.alert('Good choice. Let\'s see how many cats you are destined to have. Press \'OK\' to find out')
      var catsNumber = Math.random()
      if (catsNumber < 0.3) {
        window.alert('Only 1? Thats not enough cats')
      } else if (catsNumber < 0.7) {
        window.alert('3 cats. That sounds like quite the handful...')
        if (bestPet === 'cat' && catsNumber < 0.7) {
          window.alert('You\'ve officially reached Crazy Cat Person status!')
        }
      } else {
        window.alert('2 cats. Just the right amount of kitty love')
      }
    } else if (bestPet === 'snake') {
      window.alert('I\'m sorry but I don\'t think I can ever come visit you if you have one of those creatures in your house')
    } else if (bestPet === 'dog') {
      window.alert('Mans best friend!')
    } else {
      window.alert('Sorry, that\'s not an option')
    }
    var petTotal = window.prompt('How many pets did you have growing up?')
    var oldPets = parseInt(petTotal)
    if (isNaN(oldPets)) {
      window.alert('Thats not a number, nice try')
    } else {
      var petsWantedPrompt = window.prompt('How many pets do you want in your future?')
      var petsWanted = parseInt(petsWantedPrompt)
      if (isNaN(petsWanted)) {
        window.alert('Thats not a number, sorry.')
      } else if (petsWanted > oldPets) {
        window.alert('You want more pets than you had growing up, Nice!')
      } else if (petsWanted < oldPets) {
        window.alert('You want less pets than you had growing up? That sounds like a downgrade')
      } else if (petsWanted === oldPets) {
        window.alert('Getting the same number of pets you had when you were growing up? Sounds like a safe bet.')
      }
    }
  }
})
