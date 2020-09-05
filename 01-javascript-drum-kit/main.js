'use strict';

function playSound(e) { 
  const audio = document.querySelector(`audio[data-key="${e.which}"]`)
  const key = document.querySelector(`.key[data-key="${e.which}"]`)

  if(!audio) return //stops function 
  audio.currentTime = 0 //rewind to the start 
  audio.play()
  key.classList.add('playing')
    
}

function removeTransition(e) {
  if(e.propertyName !== 'box-shadow') return //skip if it's not included
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key'); // retrurns a node
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound) 