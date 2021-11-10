import React, { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../contentful/Contentful";
export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [imgHero, setImgHero] = useState([]);
  const [sortedMenuData, setSortedMenuData] = useState([]);
  // Background Images Data

  const getBackgroundHero = useCallback(async () => {
    try {
      let response = await client.getEntries({
        content_type: "heroBackground",
      });
      const imgHero = response.items[0].fields.heroImages;
      return setImgHero(imgHero);
    } catch (error) {
      console.log(error);
    }
  }, [setImgHero]);

  // Menues Data

  const getMenuesData = useCallback(async () => {
    try {
      let responseMenu = await client.getEntries({
        content_type: "menuesPage",
      });

      const sortData = responseMenu.items.sort(
        (a, b) =>
          new Date(a.sys.createdAt).getTime() -
          new Date(b.sys.createdAt).getTime()
      );
      return setSortedMenuData(sortData);
    } catch (error) {
      console.log(error);
    }
  }, [setImgHero]);

  useEffect(() => {
    getBackgroundHero();
    getMenuesData();
  }, []);

  return (
    <StoreContext.Provider value={{ imgHero, sortedMenuData }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
