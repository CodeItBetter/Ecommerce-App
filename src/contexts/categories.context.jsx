import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments, 
  addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

// import SHOP_DATA from './shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   const add = async () => {
  //     return await addCollectionAndDocuments('categories', SHOP_DATA);
  //   }
  //   add();
  // }, []);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
