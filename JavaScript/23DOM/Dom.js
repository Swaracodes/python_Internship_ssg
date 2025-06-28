// browser objects

console.log(window.document); // Shows the rendered HTML (human-readable)
console.dir(window.document); // Shows the DOM object (machine-readable)

// Accesing elements by using id
const headerElement = document.getElementById("main-heading");
const heading = document.getElementById('main-heading');
heading.textContent = "Updated Heading!";
heading.style.color = "blue";

console.log(typeof headerElement); // object
console.log(headerElement);        // shows the element visually
console.dir(headerElement);        // shows it as a JS object
headerElement.style.color = "red";
headerElement.style.fontSize = "30px";

// Accessing elements by Attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href")); // "https://example.com"

const link1 = document.querySelector("a");
link1.setAttribute("href", "https://www.google.com");
console.log(link1.getAttribute("href")); // "https://www.google.com"

// Accessing elements by using class
const navItems = document.getElementsByClassName("nav-item");

    console.log(navItems); // HTMLCollection (array-like object)
    console.log(navItems[0]); // First <li>
    console.log(navItems[1]); // Second <li>
    console.log(typeof navItems[2]); // object
    console.log(Array.isArray(navItems)); // false (Not a true array)

    // Changing style of first item
    navItems[0].style.color = "red";

    // This will NOT work because HTMLCollection doesn't support forEach
    // navItems.forEach(item => console.log(item.textContent)); ❌

    // But we can use a regular for loop
    for (let i = 0; i < navItems.length; i++) {
      console.log("Item:", navItems[i].textContent);
    }

// 
// Selecting the div with class "headline"
    const headLine = document.querySelector(".headline");

    console.log("Full Element:", headLine);

    // 1. Get existing HTML content inside the div
    console.log("Before Change:", headLine.innerHTML);

    // 2. Replace the existing content with new HTML
    headLine.innerHTML = "<h1>Inner HTML Changed So Manage</h1>";

    // 3. Append additional HTML (+= means add to existing content)
    headLine.innerHTML += '<button class="btn">Learn More</button>';

    // 4. Log updated HTML content
    console.log("After Change:", headLine.innerHTML);
// 1. Create a new <li> element
const newTodoItem = document.createElement("li");

// 2. Create text for it
const newTodoText = document.createTextNode("Teach Students");

// 3. Append the text to the <li>
newTodoItem.append(newTodoText);

// 4. Select the existing todo list
const todoList = document.querySelector(".todo-list");

// 5. Add new item at the end (append) or start (prepend)
todoList.append(newTodoItem);  // Adds at bottom
// todoList.prepend(newTodoItem); // Adds at top

// You can also remove any item
// const firstItem = todoList.querySelector("li");
// firstItem.remove(); // removes first list item

// ✅ 1. Get the root node (which is the document)
const rootNode = document.getRootNode();
console.log("Root Node:", rootNode); // → #document

// ✅ 2. Child nodes of root node (should return [html])
const childOfRootNode = rootNode.childNodes;
console.log("Child of Root Node:", childOfRootNode); // → [html]

// ✅ 3. Get <html> element
const htmlElement = childOfRootNode[0];
console.log("HTML Element:", htmlElement);

// ✅ 4. Get child nodes of <html>: [head, text, body]
const htmlChildNodes = htmlElement.childNodes;
console.log("HTML's Child Nodes:", htmlChildNodes);

const head = htmlChildNodes[0];
const textBetween = htmlChildNodes[1]; // newline text
const body = htmlChildNodes[2];

console.log("Head:", head);
console.log("Text Node Between:", textBetween);
console.log("Body:", body);

// ✅ 5. Traverse from <h1> to its parent, then to <body>
const h1 = document.querySelector("h1");
const h1ParentDiv = h1.parentNode;
const bodyElement = h1.parentNode.parentNode;

h1ParentDiv.style.backgroundColor = "#333";
h1ParentDiv.style.color = "#fff";
bodyElement.style.backgroundColor = "#800080"; // purple

// ✅ 6. nextSibling (includes whitespace) vs nextElementSibling
console.log("h1 nextSibling:", h1.nextSibling);            // may be a text node (\n)
console.log("h1 nextElementSibling:", h1.nextElementSibling); // → <p>

// ✅ 7. Accessing childNodes vs children
const container = document.querySelector(".container");

console.log("container.childNodes:", container.childNodes); // includes text nodes
console.log("container.children:", container.children);     // only element nodes

// ✅ 8. Accessing <title> inside <head>
const title = document.querySelector("head title");
console.log("Title:", title);
console.log("Title's Text Node:", title.childNodes); // → [text node with title content]
console.log("Title's nextElementSibling:", title.nextElementSibling); // often null in <head>

const h11 = document.querySelector("h1");
h1.parentNode.style.backgroundColor = "lightBlue";
h1.parentNode.style.color = "white";
h1.parentNode.parentNode.style.backgroundColor = "lightPink";
