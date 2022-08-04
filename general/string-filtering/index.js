const string = "Привет! Как дела?";
const string2 = "ПрИвЕт! Как дЕла?";

const vowels = ["а", "е", "ё", "у", "о", "э", "я", "и", "ю", "ы"];
const isVowel = (c) => vowels.includes(c);

function getVowels(string) {
  return Array.from(string.toLowerCase()).filter(isVowel).join("");
}

console.log(getVowels(string)); // иеаеа
console.log(getVowels(string2)); // иеаеа
