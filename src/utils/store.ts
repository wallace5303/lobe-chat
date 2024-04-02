import storage from 'store2';

export const setString = (key: string, value: string | undefined) => {
  storage.set(key, value);
};
