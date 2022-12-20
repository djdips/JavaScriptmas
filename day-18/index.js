function candies(children, candy) {
  //  write code here.
  const result = Math.floor(+candy / +children) * +children;
  return !isNaN(result) ? result : 0;
}

console.log(candies(3, 10));
console.log(candies(5, 10));
console.log(candies("6", "20"));
console.log(candies("one", 20));
