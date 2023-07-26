function hoverChangeDescription() {
    const articles = document.querySelectorAll("#skills-cards article");
  
    const showText = (event) => {
      const article = event.target.closest("article");
      const descriptionElement = article.querySelector(".description");
      const text = descriptionElement.dataset.text;
      descriptionElement.textContent = text;
      descriptionElement.style.display = "block";
    };
  
    const hideText = (event) => {
      const article = event.target.closest("article");
      const descriptionElement = article.querySelector(".description");
      descriptionElement.style.display = "none";
      descriptionElement.textContent = "";
    };
  
    articles.forEach((article) => {
      article.addEventListener("mouseover", showText);
      article.addEventListener("mouseout", hideText);
    });
  }
  
  hoverChangeDescription();
  