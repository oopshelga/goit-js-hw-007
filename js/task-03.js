

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
        const inputText = nameInput.value.trim();
        const outputText = inputText || 'Anonymous';
        nameOutput.textContent = outputText;
    
});

