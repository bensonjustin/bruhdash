var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr1) {
    return arr1[0];
  },

  // returns the last element of an array
  last: function (arr2) {
    return arr2[arr2.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr3, match) {
    for (let i=0; i<arr3.length; i++){
      if (arr3[i]===match){
        return i;
      }
    }
      return -1
  },
  // returns the index of the first matching element from right to left
  
  lastIndexOf: function (arr4, match2) {
    for (let i=arr4.length-1; i>=0; i--){
      if (arr4[i]===match2){
        return i;
      }
    }
    return -1
  },

  // returns an array with all elements except for the last element
  initial: function (arr5) {
    let arr6 = []
    for (let i=0; i<arr5.length-1; i++){
      arr6.push(arr5[i]);
    }
    return arr6
  },
  
  // returns an array with all falsey values removed
  compact: function(arr7) {
    let arr8 = []
    for (let i=0; i<arr7.length; i++){
      if (arr7[i] !== false && arr7[i] !== 0 && arr7[i] !== '' && arr7[i] !== null && arr7[i] !== undefined && arr7[i] === arr7[i]){
        arr8.push(arr7[i]);
      }
    }
    return arr8
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr9, startArr9, endArr9) {
    let arr10 = [];
    for (let i=0; i<arr9.length; i++){
      if (i >= startArr9 && i < endArr9){
        arr10.push(arr9[i]);
      }
    }
    return arr10;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr11, startArr11){
    let arr12 = []
    for (let i=0; i<arr11.length; i++){
      if (startArr11 === 0 || startArr11 === ''){
        console.log(arr12.push(arr11[i]));
      }
      if (arr11[i] > startArr11 && arr11[i] !== startArr11){
        arr12.push(arr11[i]);
      }
    }
    console.log(arr12)
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr13, n) {
    for (let i=0; i<arr13.length; i++){
      if (arr13){
        
      }
    }

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function () {

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
