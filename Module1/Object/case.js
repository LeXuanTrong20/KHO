

class burger {
    constructor(photo, name, price, hashtag,sale) {
        this.photo = photo;
        this.name = name;
        this.price = price;
        this.hashtag = hashtag;
        this.sale =  sale
    }
}
let burgers = [
    new burger("img/product-1.png", "CHEESE HAMBERGER", "29.99", "Voucher","-21%"),
    new burger("img/product-2.png", "CHEESE HAMBERGER", "29.99", "Voucher","-21%"),
    new burger("img/product-3.png", "CHEESE HAMBERGER", "29.99", "Voucher","-21%"),
    new burger("img/product-4.png", "CHEESE HAMBERGER", "29.99", "Voucher","-21%"),
    new burger("img/product-5.png", "CHEESE HAMBERGER", "29.99", "Voucher","-21%"),
    new burger("img/product-6.png", "CHEESE HAMBERGER", "29.99", "Voucher","-21%"),
]
for (let i = 0; i < burgers.length; i++) {
    document.getElementById('menu').innerHTML += `
    <div class="area">
        <div class="product-area">
            <img class="product-photo" src="${burgers[i].photo}" alt="">
            <div class="salemenu">${burgers[i].sale}</div>
        </div>
        <h3 class="textmenu">${burgers[i].name}</h3>
        <p class="textmenu">${burgers[i].price}$</p>

        <p>Rate: <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star-half-stroke" style="color: #ffc800;"></i>
        </p>

        <p class=" hashtagmenu">${burgers[i].hashtag}</p>
        <button class="ourmenu" onclick='addtocart()'>Order now</button>
    </div>
        `
}


class chicken {
    constructor(photo, name, price, hashtag, sale) {
        this.photo = photo;
        this.name = name;
        this.price = price;
        this.hashtag = hashtag;
        this.sale =  sale
    }
}
let chickens = [
    new chicken("https://mcdonalds.vn/uploads/2018/food/ga-ran/9-ga-ran.png", "6 Miếng Cánh Gà McWings™", "29.99", "Voucher","-21%"),
    new chicken("https://mcdonalds.vn/uploads/2018/2-ga-ran.png", "6 miếng Gà McNuggets™", "29.99", "Voucher","-21%"),
    new chicken("https://mcdonalds.vn/uploads/2018/food/ga-ran/6pcs_chicken_mcnuggets.png", "9 miếng gà rán", "29.99", "Voucher","-21%"),
    new chicken("https://mcdonalds.vn/uploads/2018/food/ga-ran/3pcs_chicken_mcwings.png", "Phần ăn 2 miếng gà rán", "29.99", "Voucher","-21%"),
    new chicken("https://mcdonalds.vn/uploads/2018/food/evm/EVM-10-mcchicken-deluxe-1.png","Phần ăn 8 miếng gà rán", "29.99", "Voucher","-21%"),
    new chicken("https://mcdonalds.vn/uploads/2018/food/ga-ran/medium_world_famous_fries.png", "Khoai Tây Chiên (size vừa)", "29.99", "Voucher","-21%"),
]
for (let i = 0; i < chickens.length; i++) {
    document.getElementById('menu2').innerHTML += `
    <div class="area">
        <div class="product-area">
            <img class="product-photo" src="${chickens[i].photo}" alt="">
            <div class="salemenu" >${chickens[i].sale}</div>
        </div>
        <h3 class="textmenu" >${chickens[i].name}</h3>
        <p class="textmenu" >${chickens[i].price}$</p>

        <p>Rate: <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star-half-stroke" style="color: #ffc800;"></i>
        </p>

        <p class=" hashtagmenu">${chickens[i].hashtag}</p>
        <span class="ourmenu">Order now</span>
    </div>
        `
}

class rice {
    constructor(photo, name, price, hashtag, sale) {
        this.photo = photo;
        this.name = name;
        this.price = price;
        this.hashtag = hashtag;
        this.sale =  sale
    }
}
let rices = [
    new rice("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/d82c51daf8ac1d5486aa3b0b5b376157/r/_/r_s_com-botrung-phomai.png", "Cơm Bò Trứng Phô Mai", "29.99", "Voucher","-21%"),
    new rice("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/r/_/r_s_com-gasotdau.png", "Cơm Gà Sốt Đậu", "29.99", "Voucher","-21%"),
    new rice("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/r/i/rice-spaghetti-534x374px._com-gasotbuffalo_2.png", "Cơm Gà Sốt Buffalo", "29.99", "Voucher","-21%"),
    new rice("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/r/i/rice-spaghetti-534x374px._com-gavien_1.png", "Cơm Gà Viên", "29.99", "Voucher","-21%"),
    new rice("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/r/i/rice-spaghetti-534x374px._com-thitbo_1.png","Cơm Thịt Bò", "29.99", "Voucher","-21%"),
    new rice("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/r/i/rice-spaghetti-534x374px._miy-thitbo_2.png", "Mì Ý Thịt Bò (L)", "29.99", "Voucher","-21%"),
]
for (let i = 0; i < rices.length; i++) {
    document.getElementById('menu3').innerHTML += `
    <div class="area">
        <div class="product-area">
            <img class="product-photo" src="${rices[i].photo}" alt="">
            <div class="salemenu" >${rices[i].sale}</div>
        </div>
        <h3 class="textmenu" >${rices[i].name}</h3>
        <p class="textmenu" >${rices[i].price}$</p>

        <p>Rate: <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star" style="color: #ffc800;"></i>
        <i class="fa-solid fa-star-half-stroke" style="color: #ffc800;"></i>
        </p>

        <p class=" hashtagmenu">${rices[i].hashtag}</p>
        <span class="ourmenu">Order now</span>
    </div>
        `
}