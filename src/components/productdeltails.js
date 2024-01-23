const deltail = function (product) {
    return `    
    <div class="mr-52 ml-52">
    <div cl>
      <section class="flex">
        <div id="product-container" class="inline-block w-1/3">
          <img id="product-image" class="w-96" src="${product.images[0].base_url}" alt="Product Image">
          <div id="thumbnail-container" class="grid grid-cols-5 w-72 mt-3 items-center">
            <img class="w-16" src="${product.images[0].large_url}" alt="Thumbnail 1" onclick="changeImage('${product.images[0].large_url}')">
            <img class="w-16" src="${product.images[0].medium_url}" alt="Thumbnail 2" onclick="changeImage('${product.images[0].medium_url}')">
            <img class="w-16" src="${product.images[0].small_url}" alt="Thumbnail 3" onclick="changeImage('${product.images[0].small_url}')">
            <img class="w-16" src="${product.images[0].thumbnail_url}" alt="Thumbnail 3" onclick="changeImage('${product.images[0].thumbnail_url}')">
            <img class="w-16" src="${product.images[0].base_url}" alt="Thumbnail 3" onclick="changeImage('${product.images[0].base_url}')">
          </div>
        </div>

        <div class="ml-36">
          <form action="" class="leading-10 mt-5">
            <h2 class="font-semibold text-2xl">${product.name}</h2>
            <div><img src="./public/Group 3.png" alt="" class="inline"><a href="http://">(Xem 2942 đánh giá)</a>|Đã bán
              1000+</div>
            <div class="bg-[#FAFAFA] h-24">
              <h3 class="inline text-[#FF424E]">${product.original_price}₫</h3>
              <h6 class="inline text-[#808089]"></h6>
            </div>
            <h3>Số Lượng</h3>
            <div id="quantity-container" class="flex items-center">
              <button id="decrease-btn" >-</button>
              <input type="text" id="quantity" value="1" readonly class="w-8 text-center ml-2 mr-2">
              <button id="increase-btn">+</button>
            </div>
            <button class="w-72 h-12 bg-[#FF424E] text-white rounded">Chọn mua</button>
          </form>
        </div>
      </section>
      <section class="mt-8 ">
        <h1 class="text-xl mb-4">Sản phẩm tương tự</h1>
        <div class="grid grid-cols-6 gap-4">
          <a href="/product" class="block">
            <div class="">
            <div class="inline-block leading-7">
              <img src="${product.images[0].base_url}" alt="">
              <h3>${product.name}</h3>
              <div>
                <p class="font-thin"><img src="./public/Group 3.png" alt="" class="inline-block">| Đã bán 1000+</p>
              </div>
              <p class="text-[#FF424E]">${product.original_price}</p>
            </div>
          </div>
            </a>
            <a href="/product" class="block">
            <div class="">
            <div class="inline-block leading-7">
              <img src="${product.images[0].base_url}" alt="">
              <h3>${product.name}</h3>
              <div>
                <p class="font-thin"><img src="./public/Group 3.png" alt="" class="inline-block">| Đã bán 1000+</p>
              </div>
              <p class="text-[#FF424E]">${product.original_price}</p>
            </div>
          </div>
            </a>
            <a href="/product" class="block">
            <div class="">
            <div class="inline-block leading-7">
              <img src="${product.images[0].base_url}" alt="">
              <h3>${product.name}</h3>
              <div>
                <p class="font-thin"><img src="./public/Group 3.png" alt="" class="inline-block">| Đã bán 1000+</p>
              </div>
              <p class="text-[#FF424E]">${product.original_price}</p>
            </div>
          </div>
            </a>
            <a href="/product" class="block">
            <div class="">
            <div class="inline-block leading-7">
              <img src="${product.images[0].base_url}" alt="">
              <h3>${product.name}</h3>
              <div>
                <p class="font-thin"><img src="./public/Group 3.png" alt="" class="inline-block">| Đã bán 1000+</p>
              </div>
              <p class="text-[#FF424E]">${product.original_price}</p>
            </div>
          </div>
            </a>
            <a href="/product" class="block">
            <div class="">
            <div class="inline-block leading-7">
              <img src="${product.images[0].base_url}" alt="">
              <h3>${product.name}</h3>
              <div>
                <p class="font-thin"><img src="./public/Group 3.png" alt="" class="inline-block">| Đã bán 1000+</p>
              </div>
              <p class="text-[#FF424E]">${product.original_price}</p>
            </div>
          </div>
            </a>
            <a href="/product" class="block">
            <div class="">
            <div class="inline-block leading-7">
              <img src="${product.images[0].base_url}" alt="">
              <h3>${product.name}</h3>
              <div>
                <p class="font-thin"><img src="./public/Group 3.png" alt="" class="inline-block">| Đã bán 1000+</p>
              </div>
              <p class="text-[#FF424E]">${product.original_price}</p>
            </div>
          </div>
            </a>
        </div>
      </section>
      <section class="mt-8 mb-9 text-center">
        <div class="text-left">
        <h3 class="text-xl mb-4">Mô tả sản phẩm</h3>
        <p class="mb-3">${product.description}</p>
        <p class="mb-3">${product.short_description}
        </p>
        </div>
        <button class="w-60 h-9 outline-[#189EFF] outline outline-offset-1 rounded">Xem thêm</button>
      </section>
    </div>
  </div>
`
}

export default deltail;