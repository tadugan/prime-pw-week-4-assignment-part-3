console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// creates an empty array named basket
let basket = [];
const maxItems = 5;

function addItem(item) {
  basket.push(item);
  return true;
} // end of addItem

function listItems(array) {
  for (let eachItem of array) {
    console.log('My basket contains:', eachItem);
  } // end of for loop
} // end of listItems

function empty(array) {
  console.log('Emptying contents of basket.');
  basket = [];
  console.log('Basket is now empty.');
} // end of empty function

function isFull() {
  console.log('checking if basket is full...');
  if (basket.length < maxItems) {
    return false;
  } // returns false if number of items in basket is less than maxItems
  else {
    return true;
  } // returns true is number of items in basket is >= maxItems
} //end isFull function


// test basket array
console.log(basket);

// test addItem
console.log('This will return true if the function ran:', addItem('potato'));
console.log('This will return true if the function ran:', addItem('tomato'));
console.log('This will return true if the function ran:', addItem('bread'));
console.log('This will return true if the function ran:', addItem('Coca-cola'));
console.log('This will return true if the function ran:', addItem('chives'));
console.log(`This is what is in my basket:`, basket);

//test listItems function
listItems(basket);

// test isFull
console.log('The basket is full (contains 5+ items):', isFull(basket));

// test empty function
empty(basket);
console.log(basket);
