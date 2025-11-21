import './App.css';
import { Footer } from './components/organisms/Footer';
import { Header } from './components/organisms/Header';
import { CartPageTemplate } from './components/templates/CartPageTemplate';


import {
  getProductsWithDiscount,
  preparedSimpleProducts
} from './utilities/utilityFunctions';

function App() {
  const mockCartProducts = getProductsWithDiscount(preparedSimpleProducts).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px] pb-16 mx-auto max-w-[288px] md:max-w-[592px] lg:max-w-[1136px]">
        <CartPageTemplate cartProducts={mockCartProducts}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;