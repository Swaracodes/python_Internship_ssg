<!-- DOM MD File -->
## 4 Ways to link js File
- head: script src="script.js"
- body: script src="script.js"
- async: script src="script.js" async
- defer: script src="script.js" defer

## Head Tag
- Block HTML: yes
- Run after HTML: no
- Good For: Small, quick scripts

## Body Tag
- Block HTML: NO
- Run after HTML: Yes
- Good For: Most general use

## Head Tag
- Block HTML: No
- Run after HTML: NO
- Good For: Independent scripts

## Head Tag
- Block HTML: No
- Run after HTML: Yes
- Good For: Scripts that interact with DOM

## DOM traversing
- DOM Traversing means navigating (or moving around) the elements in an HTML document using JavaScript. It allows you to access parent, child, and sibling elements from any node.
## change style
- Likely used to change the CSS styles of elements using JavaScript 
- (element.style.color, element.style.background, etc.).
## Get Element by Id
-Shows how to use document.getElementById() to access elements by ID.
## Get Element by Class query all
- getElementsByClassName() gives a live HTMLCollection, while querySelectorAll() returns a static NodeList.
## Get Element by Attriute
- get a access to attribute
- by using  Element.getAttribute("Attribute name")

## inner HTML
- Can Write the html query in js file
- element.innerHTML = "Html Query";

## Iterate Elements
- Looping over multiple elements to modify them.
- Display the elements

## querySelector
- CSS-style selectors used to pick elements.

## text_Context
-Likely uses .textContent, maybe a typo in filename.

## dom_classList
- Very useful for applying/removing CSS classes.

## dom_createEle
- Similar to dom_add_HtmlEle.js, focuses on createElement, setAttribute, etc.
