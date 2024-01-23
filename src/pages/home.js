import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import CategoryComponent from '../components/category';
import BannerComponent from '../components/banner';
import data from '../../db.json' assert {type: 'json'}
import Product from '../components/products'
const HomePage = function () {
  return `
      ${HeaderComponent()}
      <div class="mt-4">
      ${CategoryComponent()}
      <section>
      ${BannerComponent()}
      </section>
      </div>
      <div class="grid grid-cols-4 gap-4" >
      ${data.books.map(function (book) {
    return Product(book)
  }).join("")}
      </div>
      ${FooterComponent()}
    `
}

export default HomePage;