import type { Product } from "../../types/product";
import { ProductCardStyledContainer } from "./CroductCard.styled";
import { useDispatch } from "react-redux";
import { toggleProductLike } from "../../api";

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {

  const dispatch = useDispatch()

  const handleLike = () => {
    console.log(`like ${product.id}`);
  }

  return (
    <ProductCardStyledContainer>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div className="footer">
        <p className="price">{product.price} руб</p>
        {product.isLiked ? (
          <button className="like" onClick={handleLike}>like</button>
        ) : (
          <button onClick={handleLike}>like</button>
        )
        }
      </div>
    </ProductCardStyledContainer>
  )
}