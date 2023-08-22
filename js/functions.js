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

function openNewTab(link) {
    window.open("https://" + link);
};
const colors = ['#FBA949', '#FAE442', '#8BD448', '#2AA8F2', '#9C4F96', '#FF6355'];
function addTag(tag, tabs) {
    for (let i = 0; i < tabs.length; i++) {
        const span = document.createElement("span");
        span.setAttribute("class", "tag");
        span.innerHTML = tabs[i];
        span.style.backgroundColor = colors[i % 6];

        const element = document.getElementById(tag);
        element.appendChild(span);
    }
};