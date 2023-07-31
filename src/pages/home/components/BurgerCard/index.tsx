import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';
import {
  AddCartWrapper,
  CardFooter,
  BurgerCardContainer,
  Description,
  Name,
} from './styles';
import { ShoppingCart } from 'phosphor-react';
import { formatMoney } from '../../../../utils/FormatMoney';
import { useCart } from '../../../../hooks/useCart';
import { useState } from 'react';

export interface Burger {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface BurgerProps {
  burger: Burger;
}

export function BurgerCard({ burger }: BurgerProps) {
  const [quantity, setQuantity] = useState(1);
  const { addBurgerToCart } = useCart();

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...burger,
      quantity,
    };
    addBurgerToCart(coffeeToAdd);
  }

  const formattedPrice = formatMoney(burger.price);

  return (
    <BurgerCardContainer>
      <img src={`/burgers/${burger.photo}`}></img>

      <Name>{burger.name}</Name>
      <Description>{burger.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s" color="text">
            R$
          </RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </BurgerCardContainer>
  );
}
