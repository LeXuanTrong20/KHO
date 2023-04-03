class uni {
    constructor(photo, color, size, name, price, rate) {
        this.photo = photo;
        this.color = color;
        this.size = size;
        this.name = name;
        this.price = price;
        this.rate = rate
    }
}
let unis = [
    new uni("https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/458183/item/vngoods_03_458183.jpg?width=320", "Xám tro", "XS - XXL", "AirSense Áo Khoác BUMP", "1.499.000", "BUY"),
    new uni("https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455700/item/vngoods_56_455700.jpg?width=320", "Đen nhám", "XS - XXL", "AirSense Áo Khoác SAMB", "1.365.000", "BUY"),
    new uni("https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/448034/item/vngoods_08_448034.jpg?width=750", "Xám chuột", "XS - XXL", "AirSense Áo Khoác Wool Like", "1.219.000", "BUY"),
    new uni("https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/444557/item/vngoods_32_444557.jpg?width=750", "BE", "XS - XXL", "AirSense Áo Khoác Wool Fill", "1.279.000", "BUY")
]


for (let i = 0; i < unis.length; i++) {
    document.getElementById('area').innerHTML +=
        `
    
        <div class="product">
            <span>
                <img class="photo" src="${unis[i].photo}" alt="">
            </span>
            <h3>Color: ${unis[i].color}</h3>
            <p>Size: ${unis[i].size}</p>
            <h3>${unis[i].name}</h3>
            <p> Price: <b>${unis[i].price} VND</b></p>
            <span class="buy"> <b>${unis[i].rate}</b></span>
            <p>Rating: <i class="fa-regular fa-star" style="color: #ffdd00;"></i>
            <i class="fa-regular fa-star" style="color: #ffdd00;"></i>
            <i class="fa-regular fa-star" style="color: #ffdd00;"></i>
            <i class="fa-regular fa-star" style="color: #ffdd00;"></i>
            <i class="fa-regular fa-star" style="color: #ffdd00;"></i>
            </p>
        </div>
    
        `
}
