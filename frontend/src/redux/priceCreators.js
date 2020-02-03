import {PRICE_ACTION, PRICE_DOOR,PRICE_ELECTRIC,PRICE_FLOOR,PRICE_LIGHT,PRICE_MOLDING,PRICE_PLINT,PRICE_SILL,PRICE_BATH,PRICE_BATHFLOOR,PRICE_KERAMAWALL,PRICE_LOCKER,PRICE_SHOWER,PRICE_TOILET, PRICE_KITCHEN, PRICE_APRON} from "./price"


export const AddPriceDoorAC = (data) => {
  return {
    type: PRICE_DOOR,
    priceDoor:data
  };
};export const AddPriceElectricAC = (data) => {
  return {
    type: PRICE_ELECTRIC,
    priceElectric:data
  };
};export const AddPriceFloorAC = (data) => {
  return {
    type: PRICE_FLOOR,
    priceFloor:data
  };
};export const AddPriceLightAC = (data) => {
  return {
    type: PRICE_LIGHT,
    priceLight:data
  };
};export const AddPriceMoldingAC = (data) => {
  return {
    type: PRICE_MOLDING,
    priceMolding:data
  };
};export const AddPricePlintAC = (data) => {
  return {
    type: PRICE_PLINT,
    pricePlint:data
  };
};export const AddPriceSillAC = (data) => {
  return {
    type: PRICE_SILL,
    priceSill:data
  };
};export const AddPriceBathAC = (data) => {
  return {
    type: PRICE_BATH,
    priceBath:data
  };
};export const AddPriceBathFloorAC = (data) => {
  return {
    type: PRICE_BATHFLOOR,
    priceBathfloor:data
  };
};export const AddPriceKeramaWallAC = (data) => {
  return {
    type: PRICE_KERAMAWALL,
    priceKeramaWall:data
  };
};export const AddPriceLockerAC = (data) => {
  return {
    type: PRICE_LOCKER,
    priceLocker:data
  };
};export const AddPriceShowerAC = (data) => {
  return {
    type: PRICE_SHOWER,
    priceShower:data
  };
};export const AddPriceToiletAC = (data) => {
  return {
    type: PRICE_TOILET,
    priceToilet: data
  };
};

export const AddActionAC = (data) => {
  return {
    type: PRICE_ACTION,
    priceAction: data
  };
};

export const AddPriceKitchenAC = (data) => {
  return {
    type: PRICE_KITCHEN,
    priceKitchen: data
  }
};

export const AddPriceApronAC = (data) => {
  return {
    type: PRICE_APRON,
    priceApron: data
  }
}