import { useState, useEffect } from 'react';
import { getProducts, toggleProductLike, getLikedProducts } from '../../api/index';
import type { Product } from '../../types/product';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductListStyledContainer } from './ProductList..styled';

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Загрузка товаров
  const loadProducts = () => {
    setLoading(true);
    setError(null);

    const apiCall = showOnlyLiked ? getLikedProducts() : getProducts();

    apiCall
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error loading products:', error);
        if (showOnlyLiked && error.response?.status === 404) {
          setProducts([]);
        } else {
          setError('Ошибка при загрузке товаров');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadProducts();
  }, [showOnlyLiked]);

  // Обработчик лайка
  const handleLikeToggle = (productId: number, currentIsLiked: boolean) => {
    // Оптимистичное обновление
    setProducts(prev => prev.map(product =>
      product.id === productId
        ? { ...product, isLiked: !currentIsLiked }
        : product
    ));

    toggleProductLike(productId, currentIsLiked)
      .then(() => {
        // Если показываем только лайкнутые и убрали лайк - перезагружаем
        if (showOnlyLiked && currentIsLiked) {
          loadProducts();
        }
      })
      .catch((error) => {
        console.error('Error toggling like:', error);
        // Откатываем изменения в случае ошибки
        setProducts(prev => prev.map(product =>
          product.id === productId
            ? { ...product, isLiked: currentIsLiked }
            : product
        ));
      });
  };

  // Сброс ошибки и возврат ко всем товарам
  const handleReturnToAllProducts = () => {
    setError(null);
    setShowOnlyLiked(false);
  };

  if (loading) {
    return <div>Загрузка товаров...</div>;
  }

  if (error) {
    return (
      <div>
        <div>{error}</div>
        <button
          onClick={handleReturnToAllProducts}
        >
          Вернуться к списку товаров
        </button>
      </div>
    );
  }

  return (
    <ProductListStyledContainer>
      <div className='filter'>
        <button className='filter-button'
          onClick={() => setShowOnlyLiked(!showOnlyLiked)}
        >
          {showOnlyLiked ? 'Показать все товары' : 'Показать только понравившиеся'}
        </button>

        <span>
          Найдено товаров: {products.length}
        </span>
      </div>

      <div className="products-list">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onLikeToggle={handleLikeToggle}
            />
          ))
        ) : (
          showOnlyLiked ? (
            <div className="no-products-message">
              Нет понравившихся товаров
            </div>
          ) : (
            <div className="no-products-message">
              Товары не найдены
            </div>
          )
        )}
      </div>
    </ProductListStyledContainer>
  );
};

export default ProductList;