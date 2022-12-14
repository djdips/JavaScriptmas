function countVowelConsonant(str) {
  // write code here
  const VOWELS = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .map((char) => (VOWELS.indexOf(char) >= 0 ? 1 : 2))
    .reduce((prev, curr) => prev + curr);
}

console.log(countVowelConsonant("abcdeaabcd"));
console.log(countVowelConsonant("aeiou"));
console.log(countVowelConsonant("bcsfg"));
