// Coding challenge #23: Reverse a string

function reverseString(text) {
  let reverseText = "";
  let textArr = Array.from(text);
  let iterate = text.length;
  for (let i = 0; i < iterate; i++) {
    element = textArr.pop();
    reverseText = reverseText + element;
  }
  return reverseText;
}

console.log(reverseString("ABCD"));
