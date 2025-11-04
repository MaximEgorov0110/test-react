import { useEffect } from 'react'
import { ProductListStyledContainer } from './ProductList..styled.js'
import { ProductCard } from '../../components/ProductCard/ProductCard.js'
import { getProducts } from '../../api/index.js'
import { useDispatch, useSelector } from 'react-redux'
import type { Product } from '../../types/product.js'
import { setProducts } from '../../store/productsSlice.js'
import type { RootState } from '../../store/index'

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.list)

  useEffect(() => {
    getProducts()
      .then((response) => {
        dispatch(setProducts(response
        ))
      })
      .catch((error) => {
        console.error('Ошибка загрузки товаров:', error)
      })
  }, []);

  if (!Array.isArray(products)) {
    return <div>Loading products...</div>
  }

  return (
    <ProductListStyledContainer>
      <main className='main'>
        <section className='products-list container'>
          {products.map((product: Product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </section>
      </main>
    </ProductListStyledContainer>
  )
}