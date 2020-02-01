(() => {
    window.addEventListener('DOMContentLoaded', () => {
        const reverseButton = document.getElementById('reverseButton');
        reverseButton.addEventListener('click', () =>{
            const inputText = document.getElementById('text');
            const xhr = new XMLHttpRequest();
            xhr.addEventListener("load", jsonResponse);
            xhr.open("GET", "api/v1/reverse-text?text=" + encodeURIComponent(inputText.value));
            xhr.send();
        });
        function jsonResponse() {
            const reversedText = document.getElementById('reversedText');
            reversedText.value = JSON.parse(this.responseText).reversed;
        }

    });
})();

