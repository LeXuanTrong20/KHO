let fashion = [
    {
        name: "Jacket",
        brand: "Saint Laurent",
        price: "50$",
        photo: "https://saint-laurent.dam.kering.com/m/1bf4b1b1bb5d6d1c/Medium-735686Y7E631000_A.jpg?v=2",
        color: ["Black", "White"],
        size: ["42", "43", "44", "45"]
    },
    {
        name: "Pants",
        brand: "Gucci",
        price: "70$",
        photo: "https://saint-laurent.dam.kering.com/m/6d0dac6ef2e3b436/Medium-737998Y512W1000_A.jpg?v=3",
        color: ["Black", "White"],
        size: ["42", "43", "44", "45"]
    },
    {
        name: "Neck shirt",
        brand: "Saint Laurent",
        price: "110$",
        photo: "https://saint-laurent.dam.kering.com/m/3ac4d21160383c49/Medium-732473Y065W1000_A.jpg?v=2",
        color: ["Black", "White"],
        size: ["42", "43", "44", "45"]
    }
]

for (let i = 0; i < fashion.length; i++) {
    document.getElementById('body').innerHTML += `
    <tr>
        <td>${fashion[i].name}</td>
        <td>${fashion[i].brand}</td>
        <td>${fashion[i].price}</td>
        <td> <img width="80px"; height="130px"; src="${fashion[i].photo}"></td>
        <td>${fashion[i].color}</td>
        <td>${fashion[i].size}</td>
    </tr>
    `
}