// Iteration 1: Names and Input
//

const hacker1 = "Igor"
const hacker2 = "Pedro"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let array = []
for (let i = 0; i < hacker1.length; i++) {
    array.push(hacker1[i])
}

console.log(array.join(' ').toUpperCase())

let array2 = []
for (let i = 0; i < hacker2.length; i++) {
    array2.push(hacker2[i])
}
console.log(array2.reverse().join(""))

if (hacker1 < hacker2) {
    console.log(`The driver's name, ${hacker1}, goes first.`)
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator ${hacker2}, goes first definitely.`)
} else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
}

// BONUS 1
const text = "Aliquam semper sem iaculis, laoreet nulla id, pharetra nisi. Vestibulum egestas, dui sit amet posuere semper, odio libero ultricies lectus, ut consequat dolor nunc a erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eleifend consequat dolor imperdiet feugiat. Morbi rhoncus ligula nisl, a ullamcorper erat hendrerit in. Vivamus in nulla tempus eros laoreet aliquam. Aenean vitae neque rhoncus nisi pharetra vulputate eu ut ipsum. Mauris suscipit erat turpis, ut rutrum lectus porttitor pharetra. Integer condimentum metus ut ex laoreet tempor. Mauris ullamcorper dapibus nibh, et cursus ligula vehicula ut. Suspendisse potenti. Nullam dictum ligula id aliquet tincidunt. Cras volutpat porta tempor. Nullam vehicula vitae augue vel pharetra. Donec ac orci lectus. Vestibulum vel augue vel eros gravida ullamcorper. Phasellus ligula quam, hendrerit vitae maximus a, condimentum sit amet orci. Pellentesque malesuada, magna quis lobortis tempor, nisl metus efficitur neque, eget egestas velit mauris sit amet ligula. Donec id vulputate orci. Suspendisse tincidunt, felis vitae iaculis ultrices, turpis velit rhoncus ante, et tempus lectus libero at quam. Mauris eu tincidunt libero, eget mattis ex. Duis lorem purus, consectetur id faucibus id, sodales vel lacus. Donec efficitur ex vitae nunc convallis posuere. Suspendisse bibendum semper turpis et sagittis. Etiam non posuere enim. Sed massa justo, porta id semper quis, volutpat a nisl. Donec condimentum a libero sed vestibulum. Nullam ac eros quis felis congue tempus nec et velit. Nam elit arcu, molestie vel metus sit amet, ultrices facilisis lectus. Sed ligula lorem, mollis eget massa a, dapibus tempus risus. Nullam et finibus sapien, id tristique massa. Nulla id viverra orci. Cras consequat iaculis congue. Curabitur tristique dolor turpis, id faucibus orci condimentum vel. Morbi egestas varius faucibus. Nullam elit massa, ornare a blandit ut, consequat a elit. Fusce et enim sit amet diam porta porta in sit amet dolor."


console.log(text.split(' ').length)

let count = 0
for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
        if (text[i+1] === "e") {
            if (text[i+2] === "t") {
                if (text[i+3] === " ") {
                    count += 1
                }
            }
        }
    }
}

console.log(count)

//BONUS 2
const phraseToCheck = "race car"
let reversePhrase = ''

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    reversePhrase += phraseToCheck[i]
}

if (reversePhrase.replaceAll(' ', '') === phraseToCheck.replaceAll(' ', '')) {
    console.log("It's a palindrome")
} else {
    console.log("It's not a palindrome")
}

