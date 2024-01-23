// import data from '../../db.json' assert {type: 'json'};
const Product = function (book) {
    return `    
    <a href="/product/${book.id}" class="block">
    <div class="">
    <div class="inline-block leading-7">
      <img  class="w-3/4 " src="${book.images[0].base_url}" alt="">
      <h3>${book.name}</h3>
      <div>
        <p class="font-thin"><img src="./public/Group 3.png" alt="" class="inline-block">| Đã bán 1000+</p>
      </div>
      <p class="text-[#FF424E]">${book.original_price} ₫</p>
    </div>
  
  </div>
    </a>
`
}

export default Product;