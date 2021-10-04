# Guess A Number App
## PLanning

### HTML elements (View)
* Header -- static
* Instructions -- static
* Input for guess -- static
* Button to submit guess -- static
* Result display -- dynamic
* Try Again Button -- static

### State
* user guess -- value of te input field
* random number -- generated at the beginning of each round
* number of guesses -- number of guess incremented by one to 4 guesses
* result message generated
  * correct -- guess = randNum
  * too high -- guess > randNum
  * too low -- guess < randNum
  * invald -- guess > 20 OR 'Not A Number'

### PseudoCode for Event
```
// What events am I listening for?
// on button click:
//    decrement guess count (if counting down from 4)
//    get user input value, CONVERT TO NUMBER
//    compare randNum to user input value
//    if -- user input === randNum -- display "You Won!"
//    else if -- number of guesses === 4 -- display "You Lost. Out of Guesses."
//    else if -- user input > randNum -- display "Guess too high"
//    else if -- user input < randNum -- display " Guess too low"
```

## General Steps to Planning an App

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**