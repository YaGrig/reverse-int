module.exports = function reverse (n) {
    nnew = String(Math.abs(n));
    arr = nnew.split('').reverse().join('');
    return(+arr) 
  }