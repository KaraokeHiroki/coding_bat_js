/**
 * @module sleepIn.js
 * the Warmup-1/sleep_in problem from Coding Bat
 */

 /**
  * A function that determines whether or not we can
  * sleep in on a given day, based on whether or not it
  * is a weekday and/or we are on vacation.
  * 
  * @param {boolean} weekday Is today a weekday?
  * @param {boolean} vacation Are we on vacation?
  * @return {boolean}         Should we sleep in?
  */
 const sleepIn = (weekday, vacation) => {
    // first, check if it's a weekday or not
    if (weekday && ! vacation) {
        return false 
    }
    return true
}


 module.exports = {
     sleepIn
 }