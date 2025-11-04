import type { Product } from '../../types/product';
import { ProductCardStyledContainer } from './ProductCard.styled.ts';

interface ProductCardProps {
  product: Product;
  onLikeToggle: (productId: number, currentIsLiked: boolean) => void;
}

export const ProductCard = ({ product, onLikeToggle }: ProductCardProps) => {
  const handleLikeClick = () => {
    onLikeToggle(product.id, product.isLiked);
  };

  return (
    <ProductCardStyledContainer>
      <h3>{product.title}</h3>
      <img src={product.image} alt=""/>
      <p>{product.description}</p>
      <div className='footer'>
        <p>Цена: {product.price} руб.</p>
        <button
          onClick={handleLikeClick}
          className={product.isLiked ? 'liked' : ''}
        >
          {product.isLiked ? '❤️' : '🤍'} Лайк
        </button>
      </div>
    </ProductCardStyledContainer>
  );
};

export default ProductCard;