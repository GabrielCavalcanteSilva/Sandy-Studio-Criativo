//FILTRO DE PROJETOS//
const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    // remove active de todos
    buttons.forEach(btn => btn.classList.remove("active"));

    // adiciona no clicado
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    items.forEach(item => {
      const category = item.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});

//FAQ//
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

//INDEX SCROLL ANIMATION X/Y
const elementos = document.querySelectorAll(".animation-scroll-x, .animation-scroll-y")

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    }
  });
});

elementos.forEach(el => observer.observe(el));
