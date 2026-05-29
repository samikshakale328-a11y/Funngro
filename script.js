// MOBILE MENU

const menuToggle =
document.getElementById("menuToggle");

const navMenu =
document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});

// SEARCH FILTER

const searchInput =
document.getElementById("searchInput");

if(searchInput){

  searchInput.addEventListener("keyup", () => {

    let filter =
    searchInput.value.toLowerCase();

    let cards =
    document.querySelectorAll(".project-card");

    cards.forEach(card => {

      let text =
      card.innerText.toLowerCase();

      if(text.includes(filter)){

        card.style.display = "block";

      }else{

        card.style.display = "none";

      }

    });

  });

}