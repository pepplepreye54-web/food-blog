// Menu filter
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    menuItems.forEach(item => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Order button interaction
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Your order has been added!");
  });
});