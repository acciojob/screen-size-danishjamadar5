//your JS code here. If required.
let sizeElement=document.getElementByTagName("h1")[0];
sizeElement.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
// document.body.append(sizeElement);

window.onresize=function() {
	sizeElement.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}