console.log("Script Loaded Sucessfully");

let myForm = document.getElementById("contact_form");
myForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("I am an alert box!");
    const formData = new FormData(myForm);
    const myFormDataBody = Object.fromEntries(formData.entries());

    try {
        let response = await fetch('https://contactform-8447b-default-rtdb.firebaseio.com/simranDB.json', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(myFormDataBody)
        })
            .then(async (res) => {
                let abcd = await res.json();
                console.log(abcd)
            })
            .catch((err) => {
                console.log(`Error is ${err}`)
            })
            .finally(() => {
                console.log("API Compl.")
            })

    } catch (error) {
        console.log(error.message, 'error');
    };

});