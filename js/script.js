/* Created by: maliksalem1
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-06-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-06-HTML/",
  })
}

/**
 * Input.
 */

function buttonClicked() {

  var integer1 = parseInt(document.getElementById('integer1').value)
  var integer2 = parseInt(document.getElementById('integer2').value)
  var counter = 0
  var answer = 0
// if both numbers are positive
  if (integer1 > 0 && integer2 > 0) {
    while (counter < integer2) {
      answer = answer + integer1
      counter = counter + 1
    }
// if one of the numbers is positive
  } else if (integer1 > 0 && integer2 < 0) {
    while (counter > integer2) {
      answer = answer - integer1
      counter = counter - 1
    } 
  } else if (integer1 < 0 && integer2 > 0) {
      while (counter > integer1) {
        answer = answer - integer2
        counter = counter - 1
    }
// if both number are negative
  } else if (integer2 < 0 && integer1 < 0) {
      while (counter > integer2) {
        answer = answer - integer1
        counter = counter - 1
    }
  }
  document.getElementById("output").innerHTML = "Your answer is: " + answer
}