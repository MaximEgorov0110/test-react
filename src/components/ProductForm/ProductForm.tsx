import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { createNewProduct } from '../../store/productsSlice';
import type { CreateProductData } from '../../types/product';
import { useNavigate } from 'react-router-dom';
import { ProductFormStyledContainer } from './ProductFormStyled';

export const ProductForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CreateProductData>({
    title: '',
    price: 0,
    description: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    dispatch(createNewProduct(formData))
      .then(() => {
        navigate('/main');
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleBack = () => {
    navigate('/main');
  };

  return (
    <ProductFormStyledContainer className='container'>
      <h1>Создание нового товара</h1>

      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>
            Название товара *
          </label>
          <input
            type="text"
            name="title"
            placeholder="Введите название товара"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className='input-container'>
          <label>
            Цена *
          </label>
          <input
            type="number"
            name="price"
            placeholder="Введите цену"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            disabled={loading}
          />
        </div>

        <div className='input-container'>
          <label>
            Описание
          </label>
          <textarea
            name="description"
            placeholder="Введите описание товара"
            value={formData.description}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className='btn-container'>
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? 'gray' : 'green',
            }}
          >
            {loading ? 'Создание...' : 'Создать товар'}
          </button>

          <button
            type="button"
            onClick={handleBack}
            disabled={loading}
            style={{
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            Отмена
          </button>
        </div>
      </form>
    </ProductFormStyledContainer>
  );
};

export default ProductForm;