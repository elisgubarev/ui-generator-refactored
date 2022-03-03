import { FC } from 'react';
import { RootState } from "../../app/store";
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from "../../app/contentSlice";
import { composeClassList } from "../../functions/composeClassList";
import { isSelected } from "../../functions/isSelected";

import 'material-icons/iconfont/material-icons.css';
const iconStyleClass = "material-icons-round";

const colors = [
    ['#4D66F3', '#4BCFFA'],
    ['#6200EE', '#BA87F6'],
    ['#FC5068', '#FC5068'],
    ['#21D1A1', '#21D1A1'],
    ['#FDDD59', '#FDDD59'],
    ['#FC9F44', '#FC9F44'],
    ['#FC3F34', '#FC3F34'],
    ['#2B2E49', '#FAFAFA'],
];
const brightColors = ['#FDDD59', '#FAFAFA'];

type ItemProps = {
    id: number;
    selected: number;
    dark: number;
    onClick: () => void;
}

const PickerItem: FC<ItemProps> = (props) => {
    const { id, dark, onClick } = props;

    const isBright = (id: number, dark: number) => {
        return brightColors.includes(colors[id][dark]);
    }

    return (
        <button className={`color-picker__button ${isSelected(props) ? "color-picker__button_active" : ""}`}
            onClick={onClick}
            style={{
                backgroundColor: colors[id][dark],
            }}
        >
            <span className={`color-picker__icon ${iconStyleClass} ${(isBright(id, dark) ? 'color-picker__icon_black' : '')}`}>
                done
            </span>
        </button>
    );
}

type Props = {
    className?: string;
}

const ColorPicker: FC<Props> = (props) => {
    const stateColor = useSelector((state: RootState) => state.content.color);
    const stateDark = useSelector((state: RootState) => state.content.dark);
    const dispatch = useDispatch();

    const className = composeClassList('color-picker', props.className);

    const handleClick = (itemId: number) => {
        dispatch(changeColor(itemId));
    }

    return (
        <div className={className}>
            <div className="color-picker__wrapper">
                <PickerItem id={0} selected={stateColor} onClick={() => handleClick(0)} dark={stateDark} />
                <PickerItem id={1} selected={stateColor} onClick={() => handleClick(1)} dark={stateDark} />
                <PickerItem id={2} selected={stateColor} onClick={() => handleClick(2)} dark={stateDark} />
                <PickerItem id={3} selected={stateColor} onClick={() => handleClick(3)} dark={stateDark} />
                <PickerItem id={4} selected={stateColor} onClick={() => handleClick(4)} dark={stateDark} />
                <PickerItem id={5} selected={stateColor} onClick={() => handleClick(5)} dark={stateDark} />
                <PickerItem id={6} selected={stateColor} onClick={() => handleClick(6)} dark={stateDark} />
                <PickerItem id={7} selected={stateColor} onClick={() => handleClick(7)} dark={stateDark} />
            </div>
        </div>
    );
}

export default ColorPicker;