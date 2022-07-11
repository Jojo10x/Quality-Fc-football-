const menu = [
  {
    id: 1,
    title: "joao cancelo",
    category: "Defenders",
    price: 55.99,
    img: "./images/cancelo.jpg",
    desc: `I believe that is the secret for a team’s success. We are a very integrated team and that has been visible on the pitch.

 `,
  },
  {
    id: 2,
    title: "Cristiano Ronaldo",
    category: "Attackers",
    price: 40.99,
    img: "./images/cr7.jpg",
    desc: `
I strive to better myself and I always want to win. You have to fight for that, my motivation is still very much intact. When I wake up, I'm still motivated to get to training and that's the best thing in the world `,
  },
  {
    id: 3,
    title: "Kylian Mbappe",
    category: "Attackers",
    price: 180.99,
    img: "./images/kylian.jpg",
    desc: `In football, everything is possible, from the moment you work and you believe in your qualities.`,
  },
  {
    id: 4,
    title: "lionel Messi",
    category: "Attackers",
    price: 40.99,
    img: "./images/messi.jpeg",
    desc: `Every year I try to grow as a player and not get stuck in a rut. I try to improve my game in every way possible.” 2. “You can overcome anything, if and if only you love something enough. `,
  },
  {
    id: 5,
    title: "Ngolo Kante",
    category: "Midfielders",
    price: 72.99,
    img: "./images/ngolo.jpg",
    desc: `Talent without working hard is nothing. `,
  },
  {
    id: 6,
    title: "Neyamr jr",
    category: "Attackers",
    price: 88.99,
    img: "./images/nrymar.jpg",
    desc: `At first, I was playing in front of 10 people in a park, then 1,000, then 10,000, then 80,000 and you are on television. I have done it step by step, so it is not a problem. There is no lack of confidence to be on the field, in front of many, many people.`,
  },
  {
    id: 7,
    title: "declen rice",
    category: "Defenders",
    price: 70.99,
    img: "./images/riceee.jpg",
    desc: `

Football is like life: It requires perseverance, self denial, hard work, sacrifice, dedication, and respect for authority. Set your goals high, and don't stop till you get there. You fail all the time. But you aren't a failure until you start blaming someone else. `,
  },
  {
    id: 8,
    title: "paul pogba",
    category: "Midfielders",
    price: 62.99,
    img: "./images/pobgback.jpg",
    desc: `I only think about the pitch. I want to do great. I want to be one of the best. I want to win titles. I want to achieve things.

  `,
  },
  {
    id: 9,
    title: "sergio ramos",
    category: "Defenders",
    price: 16.99,
    img: "./images/ramos.jpg",
    desc: `Football is like life: It requires perseverance, self denial, hard work, sacrifice, dedication, and respect for authority. Set your goals high, and don't stop till you get there. You fail all the time. But you aren't a failure until you start blaming someone else.`,
  },
  {
    id: 10,
    title: "zlatan ibrahimović",
    category: "Attackers",
    price: 22.99,
    img: "./images/zlatan.jpg",
    desc: `
I do not need a trophy to tell myself that I am the best. I think I'm like wine.`,
  },

  
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
