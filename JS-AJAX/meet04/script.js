document.addEventListener("DOMContentLoaded", () =>{

    let apiKey = "XpHhYAYu53tNyBc3AZS2gm6am3rqV6us";

    document.getElementById("submit-btn").onclick = () =>{
        const amount = document.getElementById("amount-entry").value;
        
        const request = new XMLHttpRequest;
        request.onload = function() {
            const data = JSON.parse(this.responseText);
            const paragraph = document.createElement("p");
            paragraph.innerHTML = data.result;

            document.querySelector(".result").append(paragraph);
            document.querySelector("#amount-entry").value = "";
        }

        request.open("GET", `https://api.apilayer.com/fixer/convert?to=IDR&from=USD&amount=${amount}&apikey=${apiKey}`);
        request.send();

        return false;
    }
})