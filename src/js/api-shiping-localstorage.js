const KEY_SHOPINGLIST = 'shoping_list';

const setStorageShopingList = shopingList => {
  localStorage.setItem(KEY_SHOPINGLIST, JSON.stringify(shopingList));
};

const getStorageShopingList = () => {
  return JSON.parse(localStorage.getItem(KEY_SHOPINGLIST));
};

const removeStorageShopingList = () => {
  localStorage.removeItem(KEY_SHOPINGLIST);
};

export { setStorageShopingList, getStorageShopingList, removeStorageShopingList };
