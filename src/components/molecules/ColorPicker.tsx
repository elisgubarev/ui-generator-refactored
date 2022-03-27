import { FC } from 'react';
import { RootState } from "../../app/store";
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from "../../app/contentSlice";
import { composeClassList } from "../../functions/composeClassList";
import { isSelected } from "../../functions/isSelected";
import { iconStyleClass, colors, brightColors } from '../../app/globalData';
import 'material-icons/iconfont/material-icons.css';

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

    const renderItems = () => {
        const itemsArray = [];
        for (let itemId = 0; itemId < 8; itemId++) {
            itemsArray.push(
                <PickerItem id={itemId} key={itemId} selected={stateColor} onClick={() => handleClick(itemId)} dark={stateDark} />
            );
        }
        return itemsArray;
    }

    return (
        <div className={className}>
            <div className="color-picker__wrapper">
                {renderItems()}
            </div>
        </div>
    );
}

export default ColorPicker;