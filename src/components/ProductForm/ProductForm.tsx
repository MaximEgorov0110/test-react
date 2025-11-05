import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { createNewProduct } from '../../store/productsSlice';
import type { CreateProductData } from '../../types/product';
import { useNavigate } from 'react-router-dom';

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
        navigate('/');
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
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <button
        onClick={handleBack}

      >
        На главную
      </button>

      <h1>Создание нового товара</h1>

      <form onSubmit={handleSubmit} style={{
        border: '1px solid #ddd',
        padding: '30px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{ marginBottom: '20px' }}>
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

        <div style={{ marginBottom: '20px' }}>
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

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
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

        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? '#6c757d' : '#28a745',
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
    </div>
  );
};

export default ProductForm;