interface propsType {
    selected: number;
    id: number;
}

export const isSelected = (props: propsType) => {
    return (props.selected === props.id);
}