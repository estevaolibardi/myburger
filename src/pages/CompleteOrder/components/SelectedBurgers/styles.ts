import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const SelectedBurgersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;

  div {
    overflow-y: auto;
    max-height: 500px;
    max-height: 27vh;
    div {
    }
  }
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
