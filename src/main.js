import productdetails from "./pages/productdetails";
import HomePage from "./pages/home";
import { render, router } from "./utilities/utilities";


router.on('/', function () {
    render("#app", HomePage)
});

router.on('/product/:id', function ({data}) {
    render("#app", ()=>productdetails(data),)
});

// export default changeimg;
router.resolve();