import { RegularText, TitleText } from '../../components/Typography';
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles';
import confirmedOrderImg from '../../assets/confirmedOrdemImg.png';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderData } from '../CompleteOrder';
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions';
import { useEffect } from 'react';

interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;
  console.log(state);

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  if (!state) return <></>;

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l" color="red-ce">
          Uhu! Pedido confirmado
        </TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-red-ce']}
            text={
              <RegularText>
                Entrega em &nbsp;
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-red-ce']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong> 20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-red-ce']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderImg} />
      </section>
    </OrderConfirmedContainer>
  );
}
