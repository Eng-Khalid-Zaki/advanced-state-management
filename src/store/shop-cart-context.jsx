import { createContext } from "react";

export const CartCtx = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  updateItemQuantity: () => {},
});

export function CartContextProvider() {}
