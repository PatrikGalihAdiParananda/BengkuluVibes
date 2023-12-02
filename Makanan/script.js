const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hiddenleft");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementscenter = document.querySelectorAll(".hiddencenter");
hiddenElementscenter.forEach((el) => observer.observe(el));
