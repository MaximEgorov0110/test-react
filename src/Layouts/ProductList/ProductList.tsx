import React, { useEffect, useState, type ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchProducts, toggleLike, toggleFilter, clearError, removeProduct } from '../../store/productsSlice';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductListStyledContainer } from './ProductList..styled';

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const { list, isLoading, showOnlyLiked, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(showOnlyLiked));
  }, [dispatch, showOnlyLiked]);

  const handleLikeToggle = (productId: number, currentIsLiked: boolean) => {
    dispatch(toggleLike({ id: productId, currentIsLiked }));
  };

  const handleReturnToAllProducts = () => {
    dispatch(clearError());
    dispatch(toggleFilter());
  };

  const handleDeleteProduct = (productId: number) => {
    dispatch(removeProduct({ id: productId }));
  };

  const [querySearch, setQuerySearch] = useState('')
  const handleQuerySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuerySearch(value)
  };

  if (isLoading) return <div>Загрузка товаров...</div>;

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>
        <button onClick={handleReturnToAllProducts}>
          Вернуться к списку товаров
        </button>
      </div>
    );
  }

  return (
    <ProductListStyledContainer>
      <div className='filter'>
        <span>Найдено товаров: {list.length}</span>
        <button className='filter-button' onClick={() => dispatch(toggleFilter())}>
          {showOnlyLiked ? 'Показать все товары' : 'Показать избранное'}
        </button>
        <input type="text"
          placeholder="Поиск по названию товара..."
          value={querySearch}
          onChange={handleQuerySearch}
        />
      </div>

      <div className="products-list">
        {list.length > 0 ? (
          list.filter((product) => {
            return product.title.includes(querySearch)
          })
          .map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onLikeToggle={handleLikeToggle}
              onDelete={handleDeleteProduct}
            />
          ))
        ) : (
          <div className="no-products-message">
            {showOnlyLiked ? 'Нет понравившихся товаров' : 'Товары не найдены'}
          </div>
        )}
      </div>
    </ProductListStyledContainer>
  );
};

export default ProductList;