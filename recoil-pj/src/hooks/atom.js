import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const btnState = atom({
  key: "textState",
  default: "Hello Recoil",
});

export const selectorState = selector({
  key: "Auth",
  get: ({ get }) => {
    const inputResult = get(btnState);

    return inputResult;
  },
});

export const selectorFamilyState = selectorFamily({
  key: "selectorFamilyState",
  get: (item) => ({get}) => {
    return `${get(btnState)} ${item} GET`;
  },
  set: (item) => ({set}) => {
    set(btnState, `${item} SET`);
  }
})


export const objectState = atom({
  key: "objectState",
  default: () => {
    return {
      id: "",
      text: "",
    };
  },
});

export const autoFamilyState = atomFamily({
  key: "autoFamilyState",
  default: (number) => {
    return {
      number,
      text : '',
    };
  },
});
