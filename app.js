let pounds = document.querySelector('.pounds'),
    kilograms = document.querySelector('.kilograms'),
    grams = document.querySelector('.grams'),
    ounces = document.querySelector('.ounces'),
    form = document.querySelector("form");


form.addEventListener("input", convertWeight);

function convertWeight(e) {
    // check for pounds enter value and convert it into different weight
    if (e.target.classList.contains("pounds")) { 
        let x = e.target.value; // Take value after user input value in Pounds Box
        kilograms.value = (x / 2.2046).toFixed(2); // update value in kilograms box
        grams.value = (x / 0.0022046).toFixed(2); // update value in grams box
        ounces.value = (x * 16).toFixed(2); // update value in ounces box
        // console.log(x);
        // console.log("Yes lets do this")
    }

    // Check for kilograms enter value and convert it into different weight
    if (e.target.classList.contains("kilograms")) {
        let x = e.target.value; // Take value after user input value in kilograms Box
        pounds.value = (x * 2.2046).toFixed(2); // to fixed is use to make decimal value upto 2 digit
        grams.value = (x * 1000).toFixed(2);
        ounces.value = (x * 35.274).toFixed(2);
    }

    // check for grams enter value and convert it into different weight
    if (e.target.classList.contains("grams")) {
        let x = e.target.value; // Take value after user input value in grams Box
        kilograms.value = (x / 1000).toFixed(2);
        pounds.value = (x * 0.0022046).toFixed(2);
        ounces.value = (x * 0.035274).toFixed(2);
    }

    // check for ounces enter value and convert it into different weight
    if (e.target.classList.contains("ounces")) {
        let x = e.target.value; // Take value after user input value in ounces Box
        kilograms.value = (x / 35.274).toFixed(2);
        grams.value = (x / 0.035274).toFixed(2);
        pounds.value = (x * 0.0625).toFixed(2);
    }
}