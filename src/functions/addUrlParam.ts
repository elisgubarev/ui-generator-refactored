export const addUrlParam = (paramName: string, value: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set(paramName, value.toString());
    window.history.pushState(null, "", url.toString());
}