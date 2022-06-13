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

export const listState = atom({
    key: 'listState',
    default: [], 
    effects: [localStorageEffect('listState')],

  });