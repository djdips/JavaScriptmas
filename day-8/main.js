function validTime(str) {
  //  write code here.
  const [hours, seconds] = str.split(":");
  return (
    parseInt(hours) >= 0 &&
    parseInt(hours) < 24 &&
    parseInt(seconds) >= 0 &&
    parseInt(seconds) < 59
  );
}

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));
console.log(validTime("24:60"));
console.log(validTime("aa:bb"));
