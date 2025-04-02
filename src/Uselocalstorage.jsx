import React, { useEffect, useState } from "react";

const Uselocalstorage = (key, defaultValue) => {
  const [storageValue, setStorageValue] =useState( () => {
    const currentstoreValue = localStorage.getItem(key);
    return currentstoreValue ? JSON.parse(currentstoreValue) : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(storageValue))
  }, [key, storageValue]);

  return [storageValue,setStorageValue]
};

export default Uselocalstorage;
