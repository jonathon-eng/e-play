const nav = document.querySelector(".primary-navigation");
const mobileButton = document.getElementById("mobileButton");

mobileButton.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-something");
  // if the nav is closed, open it. Use data-attributes for JS
  if (visibility === "false") {
    nav.setAttribute("data-something", "true");
    mobileButton.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-something", "false");
    mobileButton.setAttribute("aria-expanded", false);
  }

  console.log(visibility);

  // if the nav is open, close it
});

const jp_toggle = document.getElementById("jp");
const eng_toggle = document.getElementById("eng");
const eng_text = document.getElementById("eng-text");
const jp_text = document.getElementById("jp-text");

jp_toggle.addEventListener("click", () => {
  eng_text.classList.add("hidden");
  jp_text.classList.remove("hidden");
});
eng_toggle.addEventListener("click", () => {
  jp_text.classList.add("hidden");
  eng_text.classList.remove("hidden");
});
