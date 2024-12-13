# DOM (Document object Model) 

The Document Object Model (DOM) is the foundational concept enabling web pages to be dynamic and interactive. It's the bridge between static HTML documents and programming languages like JavaScript, which can manipulate these documents in real-time.

The DOM is a tree-like representation of a webpage. When a browser loads an HTML document, it parses the document and transforms it into a structured representation that programs can interact with. This representation is the DOM.

Document: Refers to the HTML or XML document being represented.
Object: Denotes that every part of the document is an object with properties and methods.
Model: Describes the structure and relationships of the elements in the document.

- Tree-Like Structure: The DOM represents the HTML document as a hierarchical tree where each element (e.g., <div>, <p>, <img>) is a node.

- Interactive Representation: It allows you to interact with and modify the structure, style, and content of a webpage after it has been loaded in the browser.

> Common Terms:

- Element Node: Represents an HTML element (e.g., <p> or <div>).
- Text Node: Represents the text content within an element.
- Attribute Node: Represents the attributes of an element (e.g., class="header").
- Root Node: The top node of the tree, usually the <html> tag.

OR

- Document Node: The root of the tree, representing the entire document.
- Element Nodes: Represent HTML tags like <div>, <p>, <img>.
- Text Nodes: Represent text inside elements.
- Attribute Nodes: Represent attributes of elements, such as class, id, or style.
- Comment Nodes: Represent HTML comments (e.g., <!-- Comment -->).


### The DOM defines objects and methods to interact with each type of node. Below are the most commonly used interfaces:

- Document Interface: Represents the entire document.

> Provides methods like:
- document.getElementById(id)
- document.querySelector(selector)
- document.createElement(tagName)

- Element Interface : Represents individual elements.

> Provides methods like:
- element.setAttribute(name, value)
- element.classList.add(className)
- element.innerHTML or element.textContent

Node Interface : A generic interface for any node type.

> Methods include:
- node.appendChild(childNode)
- node.removeChild(childNode)
- node.cloneNode(deep)


### The DOM provides properties and methods to navigate between nodes in the tree.

> Traversal Properties

- parentNode: Access the parent of a node.
- childNodes: Access all children of a node (returns a NodeList).
- firstChild / lastChild: Access the first or last child.
- nextSibling / previousSibling: Access sibling nodes.

> Traversal Methods

- querySelector(selector): Returns the first matching element for a CSS selector.
- querySelectorAll(selector): Returns a NodeList of all matching elements.

## Window object 

The window object in JavaScript is the global object in the browser environment. It represents the browser window or tab in which a script is running and serves as the root of the DOM, BOM (Browser Object Model), and JavaScript environment.

- All global variables, functions, and objects automatically become properties of the window object in the browser.

- It provides methods and properties to control and interact with the browser window/tab, such as resizing, scrolling, or opening new windows.

- It includes browser-specific features like history, navigation, location, and screen.

- The window object is the global execution context. Any variable or function declared without a specific object reference is a property or method of window.