const menuHeader = document.getElementById("menu-header");

const testItems = [
  {
    name: "Home",
    stuff: [
      {
        name: "Subitem 1",
        id: "subitem-1",
      },
      {
        name: "Subitem 2",
        id: "subitem-2",
      },
      {
        name: "Subitem 3",
        id: "subitem-3",
      },
    ],
  },
  {
    name: "About",
    stuff: [
      {
        name: "Subitem 4",
        id: "subitem-4",
      },
    ],
  },
  {
    name: "Contact",
    stuff: [
      {
        name: "Subitem 5",
        id: "subitem-5",
      },
      {
        name: "Subitem 6",
        id: "subitem-6",
      },
    ],
  },
];

export const dropdownMain = () => {
  for (let i = 0; i < 3; i++) {
    const dropdownItem = document.createElement("div");
    dropdownItem.classList.add("menu-header-item");
    dropdownItem.id = `menu-header-item-${i}`;
    dropdownItem.textContent = testItems[i].name;

    // Create dropdown content
    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");

    // Add subitems
    testItems[i].stuff.forEach((subItem) => {
      const subItemElement = document.createElement("div");
      subItemElement.classList.add("dropdown-subitem");
      subItemElement.textContent = subItem.name;
      subItemElement.id = subItem.id;
      dropdownContent.appendChild(subItemElement);
    });

    dropdownItem.appendChild(dropdownContent);
    menuHeader.appendChild(dropdownItem);
  }

  const dropdownItems = document.querySelectorAll(".menu-header-item");
  dropdownItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const dropdownContent = item.querySelector(".dropdown-content");
      dropdownContent.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      const dropdownContent = item.querySelector(".dropdown-content");
      dropdownContent.style.display = "none";
    });
  });
};
