import { createContext, ReactNode, useEffect, useState } from 'react';
import { Burger } from '../pages/home/components/BurgerCard';
import { produce } from 'immer';

export interface CartItem extends Burger {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addBurgerToCart: (burger: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const BURGER_ITENS_STORAGE_KEY = 'myburger:cartItems';

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(BURGER_ITENS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });
  const cartQuantity = cartItems.length;
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addBurgerToCart(burger: CartItem) {
    const burgerAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === burger.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (burgerAlreadyExistsInCart < 0) {
        draft.push(burger);
      } else {
        draft[burgerAlreadyExistsInCart].quantity += burger.quantity;
      }
    });
    console.log(newCart);
    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const newCart = produce(cartItems, (draft) => {
      const burgerExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (burgerExistsInCart >= 0) {
        const item = draft[burgerExistsInCart];
        draft[burgerExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const burgerExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (burgerExistsInCart >= 0) {
        draft.splice(burgerExistsInCart, 1);
      }
    });
    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(BURGER_ITENS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addBurgerToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
