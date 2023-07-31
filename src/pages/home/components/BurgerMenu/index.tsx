import { TitleText } from '../../../../components/Typography';
import { burgers } from '../../../../data/burgers';
import { BurgerCard } from '../BurgerCard';
import { BurgerList, BurgerMenuContainer } from './styles';

export function BurgerMenu() {
  return (
    <BurgerMenuContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos burgers
      </TitleText>

      <BurgerList>
        {burgers.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} />
        ))}
      </BurgerList>
    </BurgerMenuContainer>
  );
}
