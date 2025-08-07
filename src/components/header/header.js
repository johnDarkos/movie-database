import { navigationElement } from "./navigation.js";

export const headerElement = () => {
    const header = document.createElement('header');
    const navigation = navigationElement();

    header.append(navigation);
  
    return header;
  };
  