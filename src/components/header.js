const HeaderComponent = function () {
    // `` backticks
    return `
    <header>
    <nav class="bg-[#1A94FF] flex justify-evenly items-center text-white h-24">
      <div>
       <a href="/"><img src="./public/Group 1.png" alt="" srcset=""></a>
      </div>
      <div class="flex items-center">
        <form class="flex" action="">
          <input type="text" name="" id="" style="width: 620px; height: 40px;">
          <button class="w-32 h-10 bg-[#0D5CB6] flex items-center justify-center"><img src="./public/Rectangle4.png"> Tìm kiếm</button>
        </form>
        <div class="ml-4 flex items-center">
          <img src="./public/Rectangle1.png" alt="" style="height: 32px;">
          <ul>
            <li>
              <a href="http://">Đăng kí</a>/<a href="">Đăng nhập</a>
            </li>
            <li>
              <a href="http://">Tài Khoản<iconify-icon icon="eva:arrow-down-fill"></iconify-icon> </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-end">
      <img src="./public/Group 4.png" alt=""><a href="http://">Giỏ Hàng</a>
      </div>
      </nav>
      <div class="h-10 bg-[#F5F5FA]"></div>
  </header>
      `
  }
  
  export default HeaderComponent;
