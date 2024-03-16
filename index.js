function pow(x, n){ //my version
  alert(Math.pow(x,n));
  return Math.pow(x,n);
}

pow(3,2);


/*versions from solution:
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}
*/