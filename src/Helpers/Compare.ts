export const compare = (a:string, b:string) => {
    let i = 0;
    while (a.charCodeAt(i) === b.charCodeAt(i)) {
        i++;
    }
    if (a.charCodeAt(i) < b.charCodeAt(i)) {
        return -1
    }
    if (a.charCodeAt(i) > b.charCodeAt(i)) {
        return 1
    }
    return 0
};