import { atom, DefaultValue } from "recoil";


const localStorageEffect =
    (key:any) =>
    ({setSelf, onSet}:any) => {
        const savedValue = localStorage.getItem(key);
        if(savedValue !== null){
            setSelf(JSON.parse(savedValue));
        }

        onSet((newValue:any) => {
            if(newValue instanceof DefaultValue) {
                localStorage.removeItem(key);
            }else {
                localStorage.setItem(key, JSON.stringify(newValue));
            }
        });
    };

export const wishListState = atom({
    key: 'wishListState',
    default: [], 
    effects: [localStorageEffect('wishListState')],
  });
export const groupListState = atom({
    key: 'groupListState',
    default: [], 
    effects: [localStorageEffect('groupListState')],
  });