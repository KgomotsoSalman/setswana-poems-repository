function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#typewriter", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}




function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions")


    let apiKey = "dce9442t2bd303co9f5305c7f083f189a";
    let prompt = 'User instructions are:Generate a Setswana poem about ${instructionsInput.value}';
    let context = "You are a Setswana poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions.";
    let apiUrl = 'https://api.shecodes.io/v1/generate?prompt=${prompt}&context=${context}&key=${key}';



    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = 'Generating a Setswana poem about ${instructionsInput.value}';



    console.log("Generating poem");
    console.log('Prompt: ${prompt}');
    console.log('Context: ${context}');

    axios.get(apiUrl).then(displayPoem);



    let poemElement = document.querySelector("#poem");



}





let poemFormElement = document.querySelector("#poem-generator-from");
poemFormElement.addEventListener("submit", generatePoem);