import { useEffect, useState } from "react"
import { getProductById, toggleProductLike } from "../../api"
import type { Product } from "../../types/product"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useAppDispatch } from "../../store/hooks"
import { toggleLike } from '../../store/productsSlice'
import { ProductDepailsStyledContainer } from "./ProductDetails.styled"

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      getProductById(Number(id))
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => {
          setError('Ошибка загрузки товара');
          setLoading(false);
        })
    }
  }, [id]);

  const handleLikeToggle = () => {
    if (product) {
      dispatch(toggleLike({ id: product.id, currentIsLiked: product.isLiked }))
        .then(() => {
          setProduct(product => product ? { ...product, isLiked: !product.isLiked } : null);
        });
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  if (loading) return <div>Загрузка товара...</div>;
  if (!product) return <div>Товар не найден</div>;

  return (
    <ProductDepailsStyledContainer>
      <div>
        <button
          className="back-btn"
          onClick={handleBackClick}
        >
          На главную
        </button>

        <div className="product-wrapper">
          <h1>{product.title}</h1>

          <div className="footer">
            <p className="product-price">
              Цена: {product.price} руб.
            </p>

            <button
              onClick={handleLikeToggle}
              className={product.isLiked ? 'liked' : ''}
            >
              {product.isLiked ? 'Убрать из избранного' : 'Добавить в избранное'}
            </button>
          </div>
        </div>
      </div>
    </ProductDepailsStyledContainer>
  );
};

export default ProductDetails;