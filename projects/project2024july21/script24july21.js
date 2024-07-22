document.body.onload = addElement;

function addElement() {
    //  create a new div element
    const newDiv = document.createElement("div");

    const newContent = document.createTextNode("Hi there and greetings.");

    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}


const element1 = document.getElementById("ul1");
const fragment1 = document.createDocumentFragment();
const browsers1 = ["Firefox", "Chrome", "Opera", "Safari"];

browsers1.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    fragment1.appendChild(li);
});

element1.appendChild(fragment1);


//  For the newpage demo
function newpage() {
    let thename = document.getElementById("someName1").value;
    document.open();
    document.write("<h1>Welcome! "+ thename + "</h1>");
    document.close();

}
