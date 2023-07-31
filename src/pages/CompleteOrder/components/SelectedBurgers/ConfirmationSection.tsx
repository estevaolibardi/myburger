import { Button } from '../../../../components/Button';
import { RegularText } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/FormatMoney';
import { ConfirmationSectionContainer } from './styles';

const DELIVERY_PRICE = 10;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formatttedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s" color="text">
          Total de itens
        </RegularText>
        <RegularText color="text">R${formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s" color="text">
          Entrega
        </RegularText>
        <RegularText color="text">R${formatttedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="text" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="text" size="l">
          R${formattedCartTotal}
        </RegularText>
      </div>
      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
}
