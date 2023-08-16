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

function addPageLink(link, text, classType, elementId) {
    const a = document.createElement("a");
    a.setAttribute("class", classType);
    a.setAttribute("href", link);
    a.innerHTML = text;

    const element = document.getElementById(elementId);
    element.appendChild(a);
};