import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [price, setPrice] = useState(16);
  const [sliderValue, setSliderValue] = useState(2);
  const [views, setViews] = useState('100K');
  const [isYearly, setIsYearly] = useState(false);

  const PRICE_TIERS = [
    { views: '10K', basePrice: 8 },
    { views: '50K', basePrice: 12 },
    { views: '100K', basePrice: 16 },
    { views: '500K', basePrice: 24 },
    { views: '1M', basePrice: 36 }
  ];
  
  function updateViews() {
    const tier = PRICE_TIERS[sliderValue];
    if (tier) {
      setViews(tier.views);
      const basePrice = tier.basePrice;
      setPrice(isYearly ? basePrice * 0.75 : basePrice);
    }
  }
  useEffect(() => {
    updateViews();
  }, [isYearly, sliderValue]);
  const value = {
    price,
    setPrice,
    sliderValue,
    setSliderValue,
    updateViews,
    views,
    isYearly,
    setIsYearly
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;