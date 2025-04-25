const accordion = document.getElementsByClassName("accordion");
// console.log(accordion);
const accordionContent = document.getElementsByClassName("accordion-answer");
const accordionQuestion = document.querySelectorAll(".accordion-question");

accordionQuestion.forEach((question, index) => {
  question.addEventListener("click", () => {
    if (accordionContent[index].classList.contains("active")) {
      accordionContent[index].classList.remove("active");
      accordionContent[index].classList.toggle("active");
    } else {
      for (let i = 0; i < accordionContent.length; i++) {
        accordionContent[i].classList.remove("active");
      }
    }
    accordionContent[index].classList.toggle("active");
  });
});
