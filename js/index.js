function dynamicImg(element, preview) {
    element.setAttribute('src', preview + '.gif');
};

function staicImg(element, preview) {
    element.setAttribute('src', preview + '.jpg');
};


function addImageLink(link, image, name,  elementId) {
    const a = document.createElement("a");
    a.setAttribute("class", "tabLinks");
    a.setAttribute("href", link);
    a.setAttribute("target", "_blank");

    const div2 = document.createElement("div");
    div2.setAttribute("class", "image");

    const img2 = document.createElement("img");
    img2.setAttribute("alt", name);
    img2.setAttribute("src", image);
    
    div2.appendChild(img2);

    a.appendChild(div2);

    const element = document.getElementById(elementId);
    element.appendChild(a);
};

window.onload = function() {
    addImageLink("https://github.com/kdclifford", "kdclifford.github.io/Assets/github.png", "Github", "navigation");
    addImageLink("https://www.linkedin.com/in/kyle-clifford-7474b4206", "kdclifford.github.io/Assets/linkedin.png", "Linkedin", "navigation");
}