import styled from 'styled-components';

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-red-ce']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-width: 40rem;
    }
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors['base-background']};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    z-index: -1;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #cc001e 98.76%);
  }
`;
