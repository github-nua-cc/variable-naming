# Code Comparison

This project contains three html pages with three different attach to them. The `html` and `css` is identical for each of these pages, except for which script they use in the background. Each of the scripts produces the same result, but their styles are slightly different. In class we will look at them and debate which one seems best to us.

## The Display Text Array

Let's start by looking ath the array the possible display text strings, the one that has value:

```javascript
[
  "How are you?",
  "I'm alright",
  "Wanna cup of hot choc?",
  "Yeah",
]
```

#### Script One

In the first script, this array is defined like so:

```javascript
const POSSIBLE_DISPLAY_TEXT = [
  "How are you?",
  "I'm alright",
  "Wanna cup of hot choc?",
  "Yeah, let's go!",
];
```

The choice of the coder here was to:
- Declare this array as `const`, i.e. constant, instead of `let` or `var`
- Use uppercase snake case style

#### Script Two

In the second script, this variable is defined like so:

```javascript
const possibleDisplayText = [
  "How are you?",
  "I'm alright",
  "Wanna cup of hot choc?",
  "Yeah, let's go!",
];
```

The choice of the coder here was to:
- Declare this array as `const`, i.e. constant, instead of `let` or `var`
- Use `cammelCaseStyle` style

#### Script Three

In the second script, this variable is defined like so:

```javascript
let possibleDisplayText = [
  "How are you?",
  "I'm alright",
  "Wanna cup of hot choc?",
  "Yeah, let's go!",
];
```

The choice of the coder here was to:
- Declare this array as `let`, i.e. constant, instead of `const` or `var`
- Use`cammelCaseStyle` style


Which of these three do you think is best? When should we use `const` or `let`? What about `var`?

## The button and displayText objects

The second bit of code that we will look at are the `button` and `displayText` variables, which all three scripts name in the same way, but the types for these variables are different.

#### Script One

In the first script, these objects are defined like so:

```javascript
const button = document.getElementById("update-text");
const displayText = document.getElementById("display-text");

```

The choice of the coder here was to declare both objects as `const`.

#### Script Two

In the first script, these objects are defined like so:

```javascript
let button = document.getElementById("update-text");
let displayText = document.getElementById("display-text");
```

The choice of the coder here was to declare both objects as `let`.

#### Script Three

In the third script, these objects are defined like so:

```javascript
var button = document.getElementById("update-text");
var displayText = document.getElementById("display-text");
```

The choice of the coder here was to declare both objects as `var`.

Which of these three do you think is best? Once again, we are asked to choose between `const`, `let` and `var`, although the names are all in the same style.


## The consequences of not understanding what's going on in the code

Coding is a lot of times all about choices. Which choices do I make as a coder that make sense in my code?

Sometimes we will ask ourselves questions as we code, like, for example, whether to use `let`, `const`, or `var`. Other times we may see someone else's code and see that they are following a different rule than ourselve's, like a sudden uppercase snake case style in some of their constants.

The problem is that when we don't know what the difference between two choices are, we may end up coding things that do not work as expected. In today's examples, the three codes produce the same outcome. But there is a big difference between `const`, `let` and `var`!

Look at theese thre examples of a function that only changes in the type of variable:

```javascript
function playWithX () {
  const x = 1;
  x = 3;

  if (true) {
    const x = 2;
    console.log(x);
  }
  console.log(x);
}
```

```javascript
function playWithX () {
  let x = 1;
  x = 3;

  if (true) {
    let x = 2;
    console.log(x); 
  }

  console.log(x);
}
```


```javascript
function playWithX() {
  var x = 1;
  x = 3;

  if (true) {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}
```

| Code Comparison                                     | `const`          | `let` | `var` |
| :-------------------------------------------------- | :-----           | :---- | :---- |
| Does the code work?                                 | No               | Yes   | Yes   |
| What does the code log when I execute the function? | An Error Message | 2 and 3 | 2 and 2 |

So, as you can see, the three behavious defer in that:

### `const`
A variable of type `const` cannot be reassigned. The error `Uncaught TypeError: Assignment to constant variable.` is triggered in the line `x = 3`, as we are trying to "restart" it's value to something else.

### `let`
A variable of type `let` can be reassigned. The line `x = 3` is changing the value of `x` from `1` to `3`. Then, inside the `if`, we are creating a second variable also named `x`, which is different from the first - even if they have the same name! (Confusing, I know). So, when we log each of these x's, they are different values.

### `var`
A variable of type `var` is what's called a variable with global scope, as opposed to `let`, which has what's called local scope. When we declare `var x = 2` inside the `if`, we are just reassigning the value of the original `var x`, not creating a new one.

## But how do we know for sure what variable to use?

Whether it's coming from our wondering or seeing someone else's code, whenever we are our intuition is questioned, we should always **TURN TO GOOGLE**. 

Usually, simply googling our question will gives us some insight. I recommend using a simple structure for googling, something like:

> name of coding language + direct question

For example, in this case, we could google:

> javascript should I use uppercase snake case?

or
> javascript when to use var, let, const?

Try googling these and see if your opinion changes!

## So, is Google always right?

Even with google in place, sometimes the articles don't always agree, or use technical language that we do not understand. Some of these choices - like whether to use one type of casing or another - do not really have an impact in the resulting code, whether others - like using `var`, `let` or `const` - may have an effect.

Be patient. Give yourselves time. These answers will come in time, and you'll develop the language and instincts to make confident choices. It's also difficult sometimes to keep up with the new trends... you'll get used to something you like, and then the community decides that something else is better! At the end of the day, it also comes to personal preferences. Each coder has their own style, which evolves over time, and it's difficult to judge which one's better.

## My Personal Answer

Personally, I would have chosen `script1.js` as the best coded script in this case. My reasons are the following:

- `const` is the most "secure" of variables. If I declare something `const`, I cannot later on accidentally change it's value and forget where it was pointing. Imagine there are two buttons in the page and someone writes the following code:

```javascript

const button = document.getElementById("button1");

button.onclick = () => {/* click event code */};

button = document.getElementById("button2");

button.onclick = () => {/* click event code */};

```

Since `button` is a variable of type `const`, the code will let me know that I am reusing it! If this code had been coded with `var` or `let`, the computer would not realize that I am reusing the name of a constant accidentally, the code becomes messy.

But isn't `button.onclick = () => {}` reassigning it's value? NO. This line is reassigning the method `onclick` of the object `button`, which is allowed for a constant. My recommendation would be:

> In case of doubt, use `const`. If then you realize that you need to do some reasignment and the code is throwing an `Error`, change that to `let`.

- `var` is the most "insecure" of variables. To begin with, I'd discourage from having variables with the same name in different parts of the code. But I get it, sometimes it could accidentally happen... When that happens, however, you don't want one part of the code changing the value of another part of the code! So, my recommendation is:

> If you cannot use `const` because you need to reassign the value of a variable, use `let`. There are very specific situations in you may favour `var`, but these will not come up in the scope of this course.


- Whenever I have a `const` that I will only "look at throughout the code" I like to use the uppercase snake style to signify that it's a different type of object.

Whenever we have a variable of type `const`, as we saw before, we cannot reassign the WHOLE variable, but we can always change the elements within it. This is what's happening when we do:

```javascript 
button.onclick = () => {};
```

Potentially, we could have an `array` like this one:

```javascript
const myArray = ['a', 'b', 'c'];

myArray[0] = 'e';

console.log(myArray); // This will log ['e', 'b', 'c']

```

In this case, becayse I need to modify the element at position 0, I would have used cammelCase. But in the case of the script, since the array is 100% unchanging throughout the code, I use the uppercase snake case.

## Recommended readings

- [Difference between `let` and `var`](https://sentry.io/answers/difference-between-let-and-var-in-javascript/#:~:text=The%20difference%20between%20let%20and,in%20which%20they're%20declared.)
- [Different types of cases and their uses across programming languages](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#:~:text=There%20is%20also%20an%20all,as%20the%20screaming%20snake%20case.&text=The%20capitalized%20version%20is%20used,the%20life%20of%20a%20program.)