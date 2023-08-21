const createNewElement = (e, parent, funcName = null) => {
    let li = document.createElement("li");

    let link = document.createElement("a");
    link.href = "#";
    link.title = e[0];
    if (funcName != null) {
        link.onmouseenter = funcName;
        link.onmouseleave = funcName;
    }
    let clsName = (e.length == 3) ? (e[2] == "profile") ? e[2] : "link " + e[2] : "link";
    link.className = `d-flex nav-btn ${clsName}`;

    let icon = document.createElement("i");
    icon.classList.add(`fa-${(e.length == 3) ? "solid" : "regular"}`, `fa-${(e.length == 1 || e[1] == "") ? e[0].toLowerCase() : e[1]}`);

    let p = document.createElement("p");
    p.className = "link-title"
    p.innerText = e[0];

    link.append(icon, p);
    li.append(link);

    parent.append(li)
}

const getDarkened = () => {
    document.querySelector(".filter").classList.toggle("dark-bg")
}

const openMenu = () => {
    getDarkened();
    menuBox.classList.toggle("opacity-0")
}

async function openNavbar() {
    let wait = 0;
    const nav = document.querySelector(".nav-container");
    if (nav.ariaLabel == "closed") {
        header.classList.add("h-full");
        wait = 500;
    }
    setTimeout(() => {
        nav.classList.toggle("opacity-1")
    }, wait);
    await new Promise(r => setTimeout(r, 500 - wait));

    if (nav.ariaLabel == "open") {
        header.classList.remove("h-full");
    }
    nav.ariaLabel = navLabels[labelIndex++%2];
}

const upperNavElements = [["Home", "", "active"], ["Search"]];

const mainNavElements = [
    ["Fashion", "vest"],
    ["Electronics", "air-conditioner"],
    ["Home Decor", "lamp-street"],
    ["Beauty", "wreath-laurel"],
    ["Groceries", "basket-shopping"],
    ["Utilities", "kitchen-set"]
];

const lowerNavElements = [
    ["My Address", "location-dot"],
    ["My Cart", "cart-shopping"],
    ["Sign In", "user", "profile"]
];

const navLabels = ["open", "closed"];
let labelIndex = 0;

const header = document.querySelector("header");

const upperNav = document.querySelector(".upper-nav");
const mainNav = document.querySelector(".main-nav");
const lowerNav = document.querySelector(".lower-nav");

upperNavElements.forEach(e => createNewElement(e, upperNav))
mainNavElements.forEach(e => createNewElement(e, mainNav, openMenu))
lowerNavElements.forEach(e => createNewElement(e, lowerNav))

const menuBox = document.getElementById("menu-box");
const mainNavDims = mainNav.getBoundingClientRect();

menuBox.style.left = `${header.offsetWidth}px`;
menuBox.style.top = `${mainNavDims.top + (mainNavDims.height - menuBox.offsetHeight)/2}px`
