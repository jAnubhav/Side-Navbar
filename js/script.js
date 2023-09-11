const createNavElement = (elem, parent) => {
    let li = document.createElement("li");

    const link = navItemTemplate.content.cloneNode(true).children[0];
    link.href = "#";
    link.classList.add(["link", elem[2]][~~(elem.length / 3)]);

    let icon = link.querySelector("[data-icon]");
    let title = link.querySelector("[data-title]");

    icon.classList.add(`fa${["r", "s"][elem.length % 2]}`, `fa-${[elem[1], elem[0].toLowerCase()][Number(elem.length == 1)]}`);

    link.title = title.textContent = elem[0];

    li.appendChild(link);
    parent.append(li);

    return link;
};

const setPage = (index = 0) => {
    navItems[index].classList.add("active");
    navItems[navItems.length - 1].classList.add("logo");
    setTimeout(() => {
        document.querySelector(".cover").classList.add("uncover")
    }, 300)
};

const closeMenu = () => {
    header.classList.toggle("h-full", window.innerWidth > 750);
    header.classList.toggle("w-100", window.innerWidth <= 750);

    ["d-none", "opacity-0"].forEach(tag => {
        navContainer.classList.toggle(tag, window.innerWidth <= 750);
    });

    ["head-title", "menu-btn", "link-title"].forEach(elem => {
        header.querySelectorAll(`.${elem}`).forEach(e => {
            e.classList.toggle("d-none", window.innerWidth > 750);
        });
    });
};

const toggleMenu = () => {
    header.classList.toggle("h-full");
    navContainer.classList.toggle("d-none");
    setTimeout(() => {
        navContainer.classList.toggle("opacity-0");
    }, 300);
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
let navItems = [];

navs.forEach((nav, index) => {
    navElements[index].forEach(elem => {
        navItems.push(createNavElement(elem, nav));
    });
});

["load", "resize"].forEach(tag => {
    window.addEventListener(tag, closeMenu);
});
