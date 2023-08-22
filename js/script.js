const createNavElement = (e, parent, funcName = null) => {
    let li = document.createElement("li");

    let link = document.createElement("a");
    link.href = "#";
    link.title = e[0];

    let clsName = (e.length == 3) ? (e[1] == null) ? `link ${e[2]}` : e[2] : "link";
    link.className = `d-flex nav-item ${clsName}`;

    let icon = document.createElement("i");
    icon.classList.add(
        `fa-${(e.length == 3) ? "solid" : "regular"}`, `fa-${(e[1] == null || e.length == 1) ? e[0].toLowerCase() : e[1]}`
    );

    let p = document.createElement("p");
    p.className = "link-title";
    p.innerText = e[0];

    link.append(icon, p);
    li.append(link);

    parent.append(li);
};

const openNavbar = () => {
    header.classList.toggle("h-full");
    navbar.classList.toggle("d-none");
    setTimeout(() => {
        navbar.classList.toggle("opacity-0");
    }, 500);
};

const upperNavElements = [["Home", null, "active"], ["Search"]];

const mainNavElements = [
    ["Fashion", "vest"],
    ["Electronics", "air-conditioner"],
    ["Home Decor", "lamp-street"],
    ["Beauty", "wreath-laurel"],
    ["Groceries", "basket-shopping"],
    ["Utilities", "kitchen-set"]
];

const lowerNavElements = [["My Address", "location-dot"], ["My Cart", "cart-shopping"], ["Sign In", "user", "profile"]];

const navbar = document.querySelector(".nav-container");

const upperNav = document.querySelector(".upper-nav");
const mainNav = document.querySelector(".main-nav");
const lowerNav = document.querySelector(".lower-nav");

upperNavElements.forEach(e => { createNavElement(e, upperNav); });
mainNavElements.forEach(e => { createNavElement(e, mainNav); });
lowerNavElements.forEach(e => { createNavElement(e, lowerNav); });

const header = document.querySelector("header");

if (window.innerWidth <= 600) {
    navbar.classList.add("d-none", "opacity-0");
}

setInterval(() => {
    if (window.innerWidth <= 600 && navbar.ariaLabel == "closed") {
        navbar.classList.add("d-none", "opacity-0");
        navbar.ariaLabel = "open";
    } else if (window.innerWidth > 600) {
        navbar.classList.remove("d-none", "opacity-0");
        navbar.ariaLabel = "closed";
    }
}, 100);
