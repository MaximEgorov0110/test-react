import { useNavigate, useLocation } from 'react-router-dom';
import { HeaderStyledContainer } from './Header.styled.ts';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    if (location.pathname === '/main') {
      navigate('/create');
    } else {
      navigate('/main');
    }
  };

  return (
    <HeaderStyledContainer>
      <div className='header container'>
        <div className="logo">LOGO</div>

        <button className='header-btn' onClick={handleButtonClick}>
          {location.pathname === '/main' ? 'Создать товар' : 'На главную'}
        </button>
      </div>
    </HeaderStyledContainer>
  );
};

export default Header;