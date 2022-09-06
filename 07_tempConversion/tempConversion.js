const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  c = c.toFixed(1); //toFixed returns a string rounded to one decimal place 
  return +c; //converts string to num 
};

const ctof = function(c) {
// 
  let f = c * (9/5) + 32; 
  f = f.toFixed(1);
  return +f;
};
//round to one decimal 
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
