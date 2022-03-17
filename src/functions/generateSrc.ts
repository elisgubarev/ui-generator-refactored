export const generateSrc = (state: any, type?: 'default' | 'minified' | 'download') => {
    let src = "";
    Object.keys(state).forEach((key) => {
        src += state[key];
    })
    if (type === 'minified') return `${src}.png`;
    if (type === 'download') return `https://ui-generator.s3.amazonaws.com/${src}.png`;
    if (!type || type === 'default') return `${process.env.PUBLIC_URL}/ui/${src}.png`;
}