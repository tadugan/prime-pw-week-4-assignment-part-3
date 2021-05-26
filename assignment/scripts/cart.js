console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

console.log(basket);

function addItem(item) {
  basket.push(item);
  return true;
} // end of addItem

// test addItem function
console.log('This will return true if the function ran:', addItem('potato'));
console.log('This will return true if the function ran:', addItem('tomato'));
console.log('This will return true if the function ran:', addItem('bread'));
console.log('This will return true if the function ran:', addItem('Coca-cola'));
console.log('This will return true if the function ran:', addItem('chives'));
console.log(`This is what is in my basket:`, basket);

function listItems(array) {
  for (let eachItem of array) {
    console.log('My basket contains:');
  } // end of for loop
} // end of listItems

listItems(basket);
