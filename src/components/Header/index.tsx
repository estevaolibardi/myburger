import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from '../../../src/assets/logo.png';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

export const Header = () => {
  const { cartQuantity } = useCart();
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={Logo} />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="red">
            <MapPin size={20} weight="fill" />
            Piracicaba, SP
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="red">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
};
