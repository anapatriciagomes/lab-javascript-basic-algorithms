// Iteration 1: Names and Input

// 1.1
const hacker1 = 'Patrícia';

// 1.2
console.log(`The driver's name is ${hacker1}`);

// 1.3
const hacker2 = 'Yane';

// 1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// 2.1
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1
let driverCapital = hacker1.toUpperCase();

let driverCapitalSpace = '';

for (let i = 0; i < driverCapital.length; i++) {
  driverCapitalSpace += `${driverCapital[i]} `;
}

console.log(driverCapitalSpace);

// 3.2
let navigatorReverse = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReverse += `${hacker2[i]}`;
}

console.log(navigatorReverse);

// 3.3
let alphabet = 'abcdefghijklmnopqwxyz';

alphabet = alphabet.toUpperCase();

let driverInitial = hacker1[0];

let navigatorInitial = hacker2[0];

if (alphabet.indexOf(driverInitial) < alphabet.indexOf(navigatorInitial)) {
  console.log(`The driver's name goes first.`);
} else if (
  alphabet.indexOf(driverInitial) > alphabet.indexOf(navigatorInitial)
) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus Time!

// Bonus 1

// Solution 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero dolor. Etiam non venenatis orci. Sed et imperdiet odio. Fusce pretium, ante in aliquam sodales, mauris nibh vehicula ante, quis malesuada augue elit ac diam. Etiam efficitur convallis lectus, ut venenatis urna. Sed pulvinar venenatis purus a porttitor. Curabitur gravida lobortis nibh ut scelerisque. Aenean non arcu a orci feugiat tincidunt suscipit non ex. Morbi eu turpis consectetur, ullamcorper diam ac, scelerisque dui.

Suspendisse vulputate felis sed eleifend iaculis. Phasellus bibendum mi quis velit gravida, eget porttitor lacus dignissim. Integer fringilla lectus vitae semper malesuada. Nunc condimentum in nisi at gravida. Duis porttitor facilisis placerat. Donec vestibulum semper leo id iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum consectetur orci sem, vestibulum fringilla velit consectetur at. Morbi dapibus facilisis tempor. Nulla pharetra varius sem pharetra vulputate. Aenean dictum ligula nec augue aliquam, vel fringilla magna auctor. Curabitur vel euismod leo. In elit ipsum, fermentum a ligula ac, sodales mattis purus. Suspendisse non euismod felis. Fusce tincidunt velit massa, vel tempor lacus molestie vel.

Aliquam faucibus est non tellus vulputate, eget interdum tellus efficitur. Morbi condimentum hendrerit scelerisque. Sed vulputate semper ligula eu auctor. Vivamus auctor hendrerit dolor, non vehicula eros tincidunt sit amet. Morbi ut velit vitae nulla dapibus placerat a sit amet dui. Quisque porttitor vulputate facilisis. Integer consequat vitae purus quis fermentum. Morbi sodales rutrum malesuada. Pellentesque dui mi, elementum quis lorem sit amet, convallis porttitor enim. Quisque lorem magna, vulputate sollicitudin arcu non, ultricies finibus arcu. Etiam malesuada sem nec lacus molestie accumsan. Aliquam efficitur dui et diam lobortis volutpat.`;

const longTextWords = longText.split(' ');

const longTextWordCount = longTextWords.length;

console.log(longTextWordCount);

// Solution 2
const latinWord = [];

for (let i = 0; i < longTextWords.length; i++) {
  if (longTextWords[i] === 'et') {
    latinWord.push('et');
  }
}

let latinWordCount = latinWord.length;

console.log(latinWordCount);

// Bonus 2

let phraseToCheck = 'A man, a plan, a canal, Panama!';

let phraseToCheckLowerCase = phraseToCheck.toLowerCase();

let phraseToCheckClean = '';

let alphabetLowerCase = alphabet.toLowerCase();

for (let i = 0; i < phraseToCheckLowerCase.length; i++) {
  if (alphabetLowerCase.indexOf(phraseToCheckLowerCase[i]) >= 0) {
    phraseToCheckClean += phraseToCheckLowerCase[i];
  }
}

let reverseWord = '';

for (i = phraseToCheck.length - 1; i >= 0; i--) {
  reverseWord += phraseToCheck[i];
}

reverseWord = reverseWord.toLowerCase();

let reverseWordClean = '';

for (let i = 0; i < reverseWord.length; i++) {
  if (alphabetLowerCase.indexOf(reverseWord[i]) >= 0) {
    reverseWordClean += reverseWord[i];
  }
}

let isPalindrome;

if (phraseToCheckClean === reverseWordClean) {
  isPalindrome = 'True';
} else {
  isPalindrome = 'False';
}

console.log(isPalindrome);
