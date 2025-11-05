import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types/product';
import { ProductCardStyledContainer } from './ProductCard.styled.ts';

interface ProductCardProps {
  product: Product;
  onLikeToggle: (productId: number, currentIsLiked: boolean) => void;
  onDelete: (productId: number) => void;
}

export const ProductCard = ({ product, onLikeToggle, onDelete }: ProductCardProps) => {
  const handleLikeClick = () => {
    onLikeToggle(product.id, product.isLiked);
  };

  const handleDeleteClick = () => {
    onDelete(product.id);
  };

  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <ProductCardStyledContainer>
      <button className='delete-btn' onClick={handleDeleteClick}>X</button>
      <h3 onClick={handleCardClick}>{product.title}</h3>
      <img src={product.image} alt=""/>
      <p>{product.description}</p>
      <div className='footer'>
        <p>Цена: {product.price} руб.</p>
        <button
          onClick={handleLikeClick}
          className={product.isLiked ? 'liked' : ''}
        >
          {product.isLiked ? 'Убрать из избранного' : 'Добавить в избранное'}
        </button>
      </div>
    </ProductCardStyledContainer>
  );
};

export default ProductCard;