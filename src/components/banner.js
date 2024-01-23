const BannerComponent = function() {
    return `
    <article>
        <h1 class="uppercase font-sans">Nhà Sách Tiki</h1>
        <img src="./public/Rectangle.jpg" alt="" style="width: 857px; height: 285px;">
        <ul class="flex justify-between w-4/12 mt-4">
          <li class="w-24 text-center h-11"><a href="http://">Phổ biến</a></li>
          <li class="w-24 text-center h-11"><a href="http://">Bán chạy</a></li>
          <li class="w-24 text-center h-11"><a href="http://">Hàng mới</a></li>
          <li class="w-24 text-center h-11"><a href="http://">Giá thấp</a></li>
          <li class="w-24 text-center h-11"><a href="http://">Giá cao</a></li>
        </ul>
      </article>
    `
}
export default BannerComponent;