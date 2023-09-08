const createNavElement = (elem, parent) => {
    let li = document.createElement("li");

    const link = navItemTemplate.content.cloneNode(true).children[0];
    link.href = "#";
    link.classList.add((elem.length == 3) ? elem[2] : "link");

    let icon = link.querySelector("[data-icon]");
    let title = link.querySelector("[data-title]");

    icon.classList.add(`fa-${!([1, 3].includes(elem.length)) ? "regular" : "solid"}`, `fa-${(elem.length == 1) ? elem[0].toLowerCase() : elem[1]}`);
    link.title = title.textContent = elem[0];

    li.appendChild(link);
    parent.append(li);

    links.push(link);
};

let openMenu = () => {
    header.classList.toggle("h-full");
    navContainer.classList.toggle("d-none");
    setTimeout(() => {
        navContainer.classList.toggle("opacity-0");
    }, 300);
};

let closeMenu = () => {
    if (window.innerWidth <= 750 && header.ariaLabel == "open") {
        header.classList.remove("h-full");
        navContainer.classList.add("d-none", "opacity-0");
        header.ariaLabel = "closed";
    } else if (window.innerWidth > 750) {
        header.classList.add("h-full");
        navContainer.classList.remove("d-none", "opacity-0");
        header.ariaLabel = "open";
    }
};

const navElements = [
    [["Home"], ["Search"]],
    [
        ["Fashion", "vest"],
        ["Electronics", "air-conditioner"],
        ["Home Decor", "lamp-street"],
        ["Beauty", "wreath-laurel"],
        ["Groceries", "basket-shopping"],
        ["Utilities", "kitchen-set"]
    ],
    [["My Address", "location-dot"], ["My Cart", "cart-shopping"], ["Sign In", "user", "profile"]]
];

const navItemTemplate = document.getElementById("link");

const header = document.querySelector("header");
const navContainer = document.querySelector(".nav-container");

const navs = Array.from(document.getElementsByClassName("navbar"));
const links = [];

navs.forEach((nav, index) => {
    navElements[index].forEach(elem => {
        createNavElement(elem, nav);
    });
});

links[0].classList.add("active");

setInterval(closeMenu, 100);
