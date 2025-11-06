import { useNavigate, Link } from 'react-router-dom';
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

  return (
    <ProductCardStyledContainer>
      <button className='delete-btn' onClick={handleDeleteClick}>X</button>
      <Link className='link-product' to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt="" />
        <p className='description'>{product.description}</p>
      </Link>
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