import { createContext, useState } from "react";

export const RezzitContext = createContext(null);

const RezzitProvider = ({ children }) => {
  const [updated, setupdated] = useState(false);
  return (
    <RezzitContext.Provider
      value={{
        updated,
        setupdated,
      }}
    >
      {children}
    </RezzitContext.Provider>
  );
};

export default RezzitProvider;
