import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import {
  ActionsContainer,
  BurgerCartCardContainer,
  RemoveButton,
} from './styles';
import { Trash } from 'phosphor-react';
import { CartItem } from '../../../../context/CartContext';
import { formatMoney } from '../../../../utils/FormatMoney';
import { useCart } from '../../../../hooks/useCart';

interface CoffeeCartCardProps {
  burger: CartItem;
}

export function BurgerCartCard({ burger }: CoffeeCartCardProps) {
  const coffeeTotal = burger.price * burger.quantity;
  const formatedPrice = formatMoney(coffeeTotal);
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(burger.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(burger.id, 'decrease');
  }

  function handleRemove() {
    removeCartItem(burger.id);
  }

  return (
    <BurgerCartCardContainer>
      <div>
        <img src={`/burgers/${burger.photo}`} />
        <div>
          <RegularText color="subtitle">{burger.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={burger.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R${formatedPrice}</p>
    </BurgerCartCardContainer>
  );
}
