function centuryFromYear(num) {
  //  write code here.
  const century = Math.ceil(+num / 100);
  return !isNaN(century) ? century : 0;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear("2022"));
console.log(centuryFromYear("century"));
