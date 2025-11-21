import './App.css';
import { Footer } from './components/organisms/Footer';
import { Header } from './components/organisms/Header';
import { ItemCard } from './components/templates/ItemCard/ItemCard';
import tablets from '../public/gadgets/tablets.json'
import type { CategoryProduct } from './types/CategoryProduct';

const tabletss: CategoryProduct[] = tablets as CategoryProduct[];

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px] pb-16 mx-auto max-w-[288px] md:max-w-[592px] lg:max-w-[1136px]">
        <ItemCard itemProduct={tabletss[0]} productList={tabletss} />
      </main>
      <Footer />
    </div>
  );

}

export default App;