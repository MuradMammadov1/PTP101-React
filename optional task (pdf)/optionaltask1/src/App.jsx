import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Header title="Onlayn Mağaza" subtitle="Ən son məhsullar burada" />
      <ProductList />
      <Footer year="2024" author="Developer Adı" />
    </div>
    </>
  )
}

export default App
