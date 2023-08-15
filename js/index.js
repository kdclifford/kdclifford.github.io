function dynamicImg(element, preview) {
    element.setAttribute('src', preview + '.gif');
};

function staicImg(element, preview) {
    element.setAttribute('src', preview);
};


function addImageLink(link, image, name, elementId) {
    const a = document.createElement("a");
    a.setAttribute("class", "tabLinks");
    a.setAttribute("href", link);
    a.setAttribute("target", "_blank");

    const div = document.createElement("div");
    div.setAttribute("class", "image");

    const img = document.createElement("img");
    img.setAttribute("alt", name);
    img.setAttribute("src", image);
    img.setAttribute("title", name);

    div.appendChild(img);

    a.appendChild(div);

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
    addPageLink("mailto: kdclifford@icloud.com", "kdclifford@icloud.com", "navigation");
    addPageLink("./index.html#about", "About", "navigation");
    addPageLink("./index.html#projects", "Work", "navigation");
    addPageLink("./index.html#contact", "Contact", "navigation");
}