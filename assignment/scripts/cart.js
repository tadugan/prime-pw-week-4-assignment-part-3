console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// creates an empty array named basket
let basket = [];
const maxItems = 5;

function addItem(item) {
  if (isFull(basket)) {
    console.log('Your basket is full, you cannot add more items.');
    return false;
  } // if basket contains 5+ items, the function will not add to the array
  else {
    basket.push(item);
    return true;
  } // adds item to basket, return true
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
    console.log("basket is not full.");
    return false;
  } // returns false if number of items in basket is less than maxItems
  else {
    console.log('basket is full!!');
    return true;
  } // returns true is number of items in basket is >= maxItems
} //end isFull function

function removeItem(item) {
  let index = basket.indexOf(item);
  if (index === -1) {
    console.log(`${item} was not in the basket!!`);
    return null;
  } // returns null if the item is not in the array
  else {
    basket.splice(index, 1);
    console.log(`${item} has been removed from the basket.`);
  }
} // end of removeItem

// test basket array
console.log(basket);

// test addItem
console.log('This will return true if the function added an item:', addItem('potato'));
console.log('This will return true if the function added an item:', addItem('tomato'));
console.log('This will return true if the function added an item:', addItem('bread'));
console.log('This will return true if the function added an item:', addItem('Coca-cola'));
console.log('This will return true if the function added an item:', addItem('chives'));
console.log(`This is what is in my basket:`, basket);

//test listItems function
listItems(basket);

// test isFull with full basket
console.log('The basket is full (contains 5+ items):', isFull(basket));

// test empty function
empty(basket);
console.log(basket);

// test isFull with empty basket
console.log('The basket is full (contains 5+ items):', isFull(basket));

// test new addItem functionality with isFull
console.log('This will return true if the function added an item:', addItem('potato'));
console.log('This will return true if the function added an item:', addItem('tomato'));
console.log('This will return true if the function added an item:', addItem('bread'));
console.log('This will return true if the function added an item:', addItem('Coca-cola'));
console.log('This will return true if the function added an item:', addItem('chives'));
console.log('This will return true if the function added an item:', addItem('detergent'));
console.log('This will return true if the function added an item:', addItem('Twizzlers'));
console.log(`This is what is in my basket:`, basket);

console.log('this array should be 5 items or fewer', basket);

//test removeItem
removeItem('tomato');
console.log(`This is what is in my basket:`, basket);

// test removeItem, if item is not in array
removeItem('banana');
console.log(`This is what is in my basket:`, basket);
