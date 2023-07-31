import { Intro } from './components/Intro';
import { BurgerMenu } from './components/BurgerMenu';
import { HomeContainer } from './styles';

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <BurgerMenu />
    </HomeContainer>
  );
}
