
const mainDiv = document.getElementById('root');
const newElement = document.createElement('a');
newElement.setAttribute('href','https://www.google.com');
newElement.innerHTML = 'Click Me';
mainDiv.appendChild(newElement);