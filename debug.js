
// Some functions we have written

function add(x, y) {
  const sum = x + y;

  return sum;
}

function multiply(x, y) {
  const product = x * y;

  return product;
}

function badAdd(x, y) {
  const sum = x + x;

  return sum
}

function badMultiply(x, y) {
  const product = x * y;
}

// A test helper function - outputs PASS/FAIL and details of function and result

function check( name, x, y, result, expectedResult ) {

  const success = result === expectedResult

  let output = ''

  if ( success ) {
    output += "PASS"
  } else {
    output += "FAIL"
  }

  output += `: ${name}(${x},${y})`
  if ( success ) {
    output += ` === ${expectedResult}`
  } else {
    output += ` !== ${expectedResult} (got ${result})`
  }

   console.log(output);

}

// Some test input values

const x = 1;
const y = 2;

// The expected results

expectedSum = 3;
expectedProduct = 2;

const sum = add(x, y);
check( "add", x, y, sum, expectedSum )

const badSum = badAdd(x, y);
check( "badAdd", x, y, badSum, expectedSum )

const product = multiply(x, y);
check( "multiply", x, y, product, expectedProduct )

const badProduct = badMultiply(x, y);
check( "badMultiply", x, y, badProduct, expectedProduct )

module.exports = {
  add,
  badAdd,
  multiply,
  badMultiply 
}
