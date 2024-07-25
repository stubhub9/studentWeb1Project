document.body.onload = addElement;
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
    document.write("<h2>Click REFRESH to return.</h2>");
    document.close();

}

//  onBlur, onFocus, 
let pNum = document.getElementById("phoneNum1"),
    helpTxt = document.getElementById("reminder1");

pNum.onfocus = function() {
    helpTxt.innerHTML = "Format:  123-456-7890";
}
pNum.onblur = function() {
    helpTxt.innerHTML = "";
}


//  Buttons doing stuff

let button1 = document.getElementById("btn1");
let textblock1 = document.getElementById("buttonsOutput");
button1.addEventListener("click", function(event) {
    textblock1.innerHTML = "The "+ event.type + event.currentTarget + event.detail + event.target + "for Button1 did this.";
});

//  Custom Event Button

const catFound = new CustomEvent("animalfound", {
    detail: {
        name: "cat",
    },
});


const dogFound = new CustomEvent("animalfound", {
    detail: {
        name: "dog",
    },
});

const element3 = document.createElement("div");
element3.addEventListener("animalfound", (e) => 
    //console.log(e.detail.name)
    textblock1.innerHTML = "Custom Event:  "+ e.type /*+ e.currentTarget*/+ " " + e.detail.name + /*e.target +*/ "  for Button2 did this. "
);

//  dispatch the events
let button2 = document.getElementById("btn2");
//IS: textblock1 = document.getElementById("buttonsOutput");
dogtoggle3 = false;
button2.addEventListener("click", function(event) {
if (dogtoggle3) {
    element3.dispatchEvent(dogFound);
    dogtoggle3=false;
} else  {
    element3.dispatchEvent(catFound);
    dogtoggle3=true;
};
//T/F WOULDN'T TOGGLE:  dogtoggle3 = -dogtoggle3;

});

/*button2.addEventListener("click", function(event) {
    textblock1.innerHTML = "The "+ event.type + event.currentTarget + event.detail + event.target + "for Button1 did this.";
});

/*
let introduceSelf3 = new CustomEvent ("introduceself3", {
    detail: {
        name: "Sunny"
    }
});
let introElm3 = document.getElementById("intro-button");
introElm3.addEventListener("introduceself3", function(event) {
    window.alert('Hi, Name is:  ${event.detail.name}');
});
introElm3.dispatchEvent (introduceself3);
*/


//  Header/ Viewer for 3 items.
let slinks = [document.getElementById("sumlink2"),
    document.getElementById("statslink2"),
    document.getElementById("comlink2")],

    sdivs = [document.getElementById("sumdiv2"),
        document.getElementById("statsdiv2"),
        document.getElementById("comdiv2")];

function change_div (count2) {
    slinks[count2].addEventListener("click", function(event) {
        event.preventDefault();
        sdivs[count2].style.display = "block";
        for (let j = 0; j < sdivs.length; j++ ) {
            if (j === count2) {
                continue;
            }
            else {
                sdivs[j].style.display = "none";
            }
        }
    }, false);
}

for (let i = 0; i < slinks.length; i++) {
    change_div(i);
}
sdivs[1].style.display = "none";
sdivs[2].style.display = "none";