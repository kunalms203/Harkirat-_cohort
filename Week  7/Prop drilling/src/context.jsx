// context.jsx
import { createContext } from "react";

// Provide both count and setCount in the default value
export const CountContext = createContext({
  count: 0,
  setCount: () => {},
});
