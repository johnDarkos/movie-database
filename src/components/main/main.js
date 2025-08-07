export const mainElement = (...children) => {
    const main = document.createElement("main");

    children.forEach(child => {
        if (child instanceof Node) {
            main.append(child);
        }
    });

    return main;
};

