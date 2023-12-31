import styled from 'styled-components';
import { TitleText } from '../../../../components/Typography';
import introBackgroundImg from '../../../../assets/Backgrounds.jpg';
import { rgba } from 'polished';

export const IntroContainer = styled.section`
  width: 100%;
  height: 30rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  img {
    max-width: 570px;
    filter: drop-shadow(0 0 0.45rem #000);
    margin-top: 2rem;
  }
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 2rem;
`;
