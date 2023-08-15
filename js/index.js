function dynamicImg(element, preview) {
    element.setAttribute('src', preview + '.gif');
};

function staicImg(element, preview) {
    element.setAttribute('src', preview + '.jpg');
};


function addImageLink(link, image, name, elementId) {
    const a = document.createElement("a");
    a.setAttribute("class", "tabLinks");
    a.setAttribute("href", link);
    a.setAttribute("target", "_blank");

    const div2 = document.createElement("div");
    div2.setAttribute("class", "image");

    const img2 = document.createElement("img");
    img2.setAttribute("alt", name);
    img2.setAttribute("src", image);
    img2.setAttribute("title", name);

    div2.appendChild(img2);

    a.appendChild(div2);

    const element = document.getElementById(elementId);
    element.appendChild(a);
};

function addPageLink(link, text, elementId) {
    const a = document.createElement("a");
    a.setAttribute("class", "pageLink");
    a.setAttribute("href", link);
    a.innerHTML = text;

    const element = document.getElementById(elementId);
    element.appendChild(a);
};

window.onload = function () {
    addImageLink("https://github.com/kdclifford", "./Assets/github.png", "Github", "navigation");
    addImageLink("https://www.linkedin.com/in/kyle-clifford-7474b4206", "./Assets/linkedin.png", "Linkedin", "navigation");
    addPageLink("./index.html#about", "About", "navigation");
    addPageLink("./index.html#projects", "Work", "navigation");
    addPageLink("./index.html#contact", "Contact", "navigation");
}