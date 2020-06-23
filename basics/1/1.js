const string = "Привет! Как дела?";
function getVowels(phrase) {
  const alpabetVowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  phrase = phrase.toLowerCase(phrase);
  let resultPhrase = '';
  for (let i = 0; i < phrase.length; i++) {
    for (let j = 0; j < alpabetVowels.length; j++) {
      if (phrase.charAt(i) === alpabetVowels[j]) {
        resultPhrase += phrase.charAt(i);
      }
    }
  }
  return resultPhrase;
}
console.log(getVowels(string));