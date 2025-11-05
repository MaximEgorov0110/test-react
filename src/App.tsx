import { ProductForm } from './components/ProductForm/ProductForm';
import { ProductDetails } from './Layouts/ProductDetails/ProductDetails'
import { ProductList } from './Layouts/ProductList/ProductList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux'
// import store from './store'
// import { getProducts } from './api'

function App() {
  // getProducts()

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/create' element={<ProductForm/>} />
      </Routes>
    </Router>
  )
}

export default App
