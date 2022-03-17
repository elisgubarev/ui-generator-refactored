export const generateSrc = (state: any) => {
    let src = "";
    Object.keys(state).forEach((key) => {
        src += state[key];
    })
    return `${process.env.PUBLIC_URL}/ui/${src}.png`;
}