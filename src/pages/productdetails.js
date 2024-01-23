import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import deltail from '../components/productdeltails';
import data from '../../db.json' assert {type: 'json'};

const productdetails = function ({id}){
  const product = data.books.find(item => item.id === +id);

  if (!product) return null;
      return `
      ${HeaderComponent()}
     ${deltail(product)}
      ${FooterComponent()}
       `

}
export default productdetails;