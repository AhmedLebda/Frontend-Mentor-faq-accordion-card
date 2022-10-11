// DOM variables
const showAnswer = document.querySelectorAll(".show-answer");
const answerContainers = document.querySelectorAll(".answer");

// Adding height of 0 px to all of answer containers
answerContainers.forEach((element) => (element.style.height = "0px"));

// Showing answer on clicking
showAnswer.forEach((element) => {
    element.onclick = (e) => {
        // Target Variables
        const answer = e.currentTarget.children[1].children[0];
        const answerHeight = answer.getBoundingClientRect().height;
        const answerContainer = e.currentTarget.children[1];
        const question = e.currentTarget.children[0].children[0];
        const questionImage = e.currentTarget.children[0].children[1];

        console.log(questionImage);
        if (answerContainer.style.height === "0px") {
            answerContainer.style.height = `${answerHeight}px`;
            question.classList.add("question-active");
            questionImage.style.transform = `rotateX(180deg)`;
        } else {
            answerContainer.style.height = `0px`;
            question.classList.remove("question-active");
            questionImage.style.transform = `rotateX(0deg)`;
        }
    };
});
