function generatePoem(event) {
    event.preventDefault();


    let poemElement = document.querySelector("#poem");

    new Typewriter("#typewriter", {
        strings: "poem poem poem",
        autoStart: true,
        delay: 1,
        cursor: ""
    });

}





let poemFormElement = document.querySelector("#poem-generator-from");
poemFormElement.addEventListener("submit", generatePoem);