import { ProductForm } from './components/ProductForm/ProductForm';
import { ProductDetails } from './Layouts/ProductDetails/ProductDetails'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AnyPage from './pages/AnyPade/AnyPage';
// import { Provider } from 'react-redux'
// import store from './store'
// import { getProducts } from './api'

function App() {
  // getProducts()

  return (
    <Router>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/' element={<Navigate to="/main" replace />} />


        <Route path='/' element={<AnyPage />} >
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/create' element={<ProductForm />} />
        </Route>

        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </Router>
  )
}

export default App
