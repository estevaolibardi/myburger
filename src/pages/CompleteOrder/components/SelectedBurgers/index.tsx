import { TitleText } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';
import { BurgerCartCard } from '../BurgerCartCard';
import { ConfirmationSection } from './ConfirmationSection';
import { DetailsContainer, SelectedBurgersContainer } from './styles';

export function SelectedBurgers() {
  const { cartItems } = useCart();
  return (
    <SelectedBurgersContainer>
      <TitleText size="xs" color="subtitle">
        Burgers selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => (
          <BurgerCartCard key={item.id} burger={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedBurgersContainer>
  );
}
