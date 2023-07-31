import { RegularText } from '../../../../components/Typography';
import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles';
import introImg from '../../../../assets/tripleburger.png';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { InfoWithIcon } from '../../../../components/InfoWithIcon';
import { useTheme } from 'styled-components';

export function Intro() {
  const { colors } = useTheme();
  //Hook para importar cor do tema

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl" color="title2">
              Os melhores lanches, pelo melhor preço!
            </IntroTitle>
            <RegularText size="l" color="white" as="h3">
              Delicie-se com os sabores autênticos e surpreendentes em uma
              experiência gastronômica única. Uma explosão de sabor em cada
              pedaço – venha descobrir o verdadeiro sabor da felicidade!"
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text={
                <RegularText color="title2">
                  Compras simples e seguras
                </RegularText>
              }
              iconBg={colors['brand-yellow']}
            />
            <InfoWithIcon
              icon={<Package weight="fill" />}
              text={
                <RegularText color="title2">Hamburguer Artesanal</RegularText>
              }
              iconBg={colors['brand-yellow']}
            />
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              text={
                <RegularText color="title2">
                  Entrega rápida e rastreada
                </RegularText>
              }
              iconBg={colors['brand-yellow']}
            />
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              text={
                <RegularText color="title2">Promoção toda semana</RegularText>
              }
              iconBg={colors['brand-yellow']}
            />
          </BenefitsContainer>
        </div>
        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  );
}
