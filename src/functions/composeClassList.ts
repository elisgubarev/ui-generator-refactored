export const composeClassList = (defaultClasses: string, classFromProps?: string) => {
    if (!classFromProps) return defaultClasses;
    return `${defaultClasses} ${classFromProps}`;
}