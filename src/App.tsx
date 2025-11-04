import './App.css'
import { ProductList } from './Layouts/ProductList/ProductList'
import { Provider } from 'react-redux'
import store from './store'
// import { getProducts } from './api'

function App() {
  // getProducts()
  
  return (
    <Provider store={store}>
      <ProductList>
      </ProductList>
    </Provider>
  )
}

export default App
