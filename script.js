//your JS code here. If required.
const sizeElement=document.getElementByName("h1");
sizeElement.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
// document.body.append(sizeElement);

window.onresize=function() {
	sizeElement.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}