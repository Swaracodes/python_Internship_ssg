## Event Listener Setup
- addEventListener("click", callback) is used to attach a click event to a button.
- Callback functions can be:
> Regular functions → this refers to the element the event is bound to.
> Arrow functions → this does not refer to the element; it inherits from the parent scope (usually window or enclosing function).

## Event Object
- When an event occurs (like a click), the browser provides an event object (e) to the callback function containing details of that event.
> e.target: The actual element that was clicked.
> e.currentTarget: The element the event listener is attached to (usually same as target, unless there's event bubbling).

## ✅ Statements Explaining Selector Differences

- Single Element Selection (querySelector)
> const firstbtn = document.querySelector("#one");
> This selects only the first element that matches the selector (#one).
> Used when you want to target one specific button.
> You then add an event listener just to that one button.

- Multiple Elements Selection (querySelectorAll)
> const allbtns = document.querySelectorAll("button");
> This selects all "button" elements and returns a NodeList.
> Useful when you want to add the same event listener to multiple buttons.

## 👉 Intro to Events in JavaScript
## ✅ 1. What are Events?
- Events are actions that happen in the browser (e.g., clicks, mouse movements, key presses).

-JavaScript lets you respond to these events using event listeners.

## ✅ 2. Types of Event Attachment
- Method 1: Inline HTML Event (Not Recommended Anymore)
> <button onclick="console.log('You Clicked me')">Learn More</button>

- Method 2: Using .onclick Property in JS
> const btn = document.querySelector(".btn-headline");
> btn.onclick = function () {
>     console.log("You Clicked Me!!");
> };

- Method 3: Using .addEventListener() (Recommended Way)

## ✅ Keypress Event in JavaScript
- The keypress event is triggered when the user presses a key that produces a character, like letters (A-Z), numbers (0-9), or symbols (!, @, etc.).

- The keypress event is triggered when the user presses a key that produces a character, like letters (A-Z), numbers (0-9), or symbols (!, @, etc.).

## ✅ Mouse Events: mouseover vs mouseleave
- mouseover: 
> - Triggers when the mouse pointer enters the element or any of its child elements.

> - Event bubbles up to parent elements.

- mouseleave:
> - Triggers when the mouse pointer leaves the element entirely.
> - Does not bubble like mouseout.

## 🧠 Key Points:
- keypress is mostly used for capturing text input.
- mouseover can be triggered even by children elements.
- mouseleave only fires when the mouse leaves the entire element.

## Event Deligation Model
- ✅ 1. Event Bubbling
> - When an event is triggered on a nested element (like .child), the event bubbles up to the parent → grandparent → body.

> - The order will be:
> - ✅ Bubble Child
> - ✅ Bubble parent
> - ✅ Bubble grandparent
> - ✅ Bubble body
> - 🔄 Bottom → Up flow (child to outermost).

- ✅ 2. Event Capturing
> - This is top-down event propagation.
> - The event is captured starting from outer elements to the inner target.
> - The order will be:

> - ✅ Capture body
> - ✅ Capture grandparent
> - ✅ Capture parent
> - ✅ Capture child
> - 🔁 Top → Down flow (outermost to child).

- ✅ 3. Event Delegation
> - Event Delegation allows you to handle events on a parent, even if the event is triggered on a child.
> - This avoids adding listeners to many child elements.
> - e.target tells you which element was actually clicked.
> - Helpful for dynamically generated elements.
