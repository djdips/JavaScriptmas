// Panic Function

const panic = (str) => {
  const strArr = str.split(" ");
  if (strArr.length === 1) {
    return str.toUpperCase().concat("!");
  }
  return strArr.join(" 😱 ").toString().toUpperCase().concat("!");
};

console.log(panic("Hello"));
console.log(panic("Hello World"));
