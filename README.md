What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: getElementByID finds one element by its unique ID. It always return a single element.
getElementByClassName also use in DOM that can finds all elements witha  specific class name.
querySelector can find the elements of  a DOM that match CSS selector line id class and querySelectorAll finds all elements.

How do you **create and insert a new element into the DOM**?
Answer: To create a new element in DOM, we can use document.createElement("tag") and we need to set the text or attributes in it.
After that, when we insert it into a page, we can use appendChild, append, prepend, before and after.

What is **Event Bubbling** and how does it work?
Answer: Event Bubbling means that when we click an element, the event first runs on that element. After that, it moves to upward to it's parents or above parents till the top document. 
So the same event can be caught on the child or any of its parent elements.

What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event delegation means adding one event listener to a parent element instead of many child.
The event use bubbling to reach the parent and we check child click on it. It is useful because it makes code faster, uses less memory and work even for new dynamic elements.

What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: PreventDefault() stops the browser's default action that means it control form opening or submiting.
stopPropagation() stops the event from bubbling or capturing the DOM tree. So one is control the browser's action the other is 
controls the event flow.
