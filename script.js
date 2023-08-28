const data = [
 {   country: "usa", 
        states: ["New York", "California", "Texas"],
        cities: {
            "New York": ["New York City", "Buffalo"],
            "California": ["Los Angeles", "San Francisco"],
            "Texas": ["Houston", "Dallas"]
        }
    },
   { country: "canada", 
        states: ["Ontario", "Quebec", "British Columbia"],
        cities: {
            "Ontario": ["Toronto", "Ottawa"],
            "Quebec": ["Montreal", "Quebec City"],
            "British Columbia": ["Vancouver", "Victoria"]
        }
    }
];

function bindState() {
    let inputValue = document.getElementById("country").value;

    let changeCountry = data.find((value)=>{
        return value.country == inputValue;
    }).states.map((value2)=>{
        return `<option value="${value2}">${value2}</option>`
    })
    document.getElementById("state").innerHTML = changeCountry.join(" ");
}

function bindCity() {
    let inputValue = document.getElementById("country").value;
    let inputValue1 = document.getElementById("state").value;

    let changeCity = data.find((value)=>{
        return value.country == inputValue;
    }).cities[inputValue1].map((value2)=>{
        return `<option value="">${value2}</option>`
    })
    document.getElementById("city").innerHTML = changeCity.join(" ");
}









