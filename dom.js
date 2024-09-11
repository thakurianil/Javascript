// const elm = document.getElementById("first");
// const elm = document.getElementsByClassName("info");
// const elm = document.getElementsByTagName("div");
// const elm = document.querySelector(".message");

// const elm = document.querySelectorAll(".info > div p");

// const val = elm.innerText;
// elm.innerText = "Updated";
// console.log(val);

// document.write("hey just adding some data")

// const elm = document.querySelector("body");
// // const textNode = document.createTextNode("hi this is anil ");
// const paraElm = document.createElement("p");

// paraElm.innerText = "this is me";
// elm.appendChild(paraElm);
// console.log(elm);

// elm.innerBefore(paraElm,)

// elm. removeChild(document.querySelector("[href= 'google.com']"))
const google  = document.querySelector("[href = 'google.com']");
google.style.fontSize = "12rem";
google.style.color = "red";

// const attb = google.getAttribute("style");

// console.log(attb);
document.querySelector(".display").setAttribute("style", "font-size : 2rem;");
document.querySelector('.display').setAttribute("href", "go to google");