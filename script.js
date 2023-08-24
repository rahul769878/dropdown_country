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
    let countryValue = document.getElementById("country").value;
    let displayValue = data.find((value)=>{
        return value.country == countryValue;
    }) 
    let displayState = displayValue.states.map((value1)=>{
        return `<option value="${value1}">${value1}</option>`
    })
    document.getElementById("state").innerHTML = displayState.join(" ");
    bindCity(displayValue.cities)
}









