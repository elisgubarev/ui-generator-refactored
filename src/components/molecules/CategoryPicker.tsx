import { FC } from 'react';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../app/contentSlice'
import { composeClassList } from '../../functions/composeClassList';
import { isSelected } from '../../functions/isSelected';
import { categories, materialIcons, iconStyleClass } from '../../app/globalData';
import 'material-icons/iconfont/material-icons.css';

type ItemProps = {
    id: number;
    selected: number;
    type: number;
    onClick: () => void;
    noTip?: boolean;
}

const CategoryItem: FC<ItemProps> = (props) => {
    const { id, type, onClick } = props;
    const itemIcon = materialIcons[id][type];

    return (
        <button
            className={`category-picker__button ${isSelected(props) ? "category-picker__button_active" : ""}`}
            onClick={onClick}
            data-tip={!props.noTip ? categories[id][type] : null}
            data-class="tooltip-custom"
        >
            <span className={`category-picker__icon ${iconStyleClass}`}>
                {itemIcon}
            </span>
        </button>
    );
}

type Props = {
    className?: string;
    noTip?: boolean;
}

const CategoryPicker: FC<Props> = (props) => {
    const stateCategory = useSelector((state: RootState) => state.content.category);
    const stateType = useSelector((state: RootState) => state.content.type);
    const dispatch = useDispatch();

    const className = composeClassList('category-picker', props.className);

    const handleClick = (buttonId: number) => {
        dispatch(changeCategory(buttonId));
    }

    const renderItems = () => {
        const itemsArray = [];
        for (let itemId = 0; itemId < 8; itemId++) {
            itemsArray.push(
                <CategoryItem id={itemId} key={itemId} selected={stateCategory} noTip={props.noTip} type={stateType} onClick={() => handleClick(itemId)} />
            );
        }
        return itemsArray;
    }

    return (
        <div className={className}>
            <div className="category-picker__wrapper">
                {renderItems()}
            </div>
        </div>
    );
}

export default CategoryPicker;