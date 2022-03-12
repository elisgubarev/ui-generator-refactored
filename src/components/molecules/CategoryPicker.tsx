import { FC } from 'react';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../app/contentSlice'
import { composeClassList } from '../../functions/composeClassList';
import { isSelected } from '../../functions/isSelected';
import { changeImageLoading } from '../../app/appStateSlice';

import 'material-icons/iconfont/material-icons.css';
const iconStyleClass = "material-icons-round";

const categories = [
    ["Dashboard 1", "Sign up"],
    ["Dashboard 2", "Messenger"],
    ["Dashboard 3", "Profile"],
    ["Kanban", "Social feed"],
    ["CRM", "Dashboard"],
    ["Finance", "E-commerce"],
    ["Calendar", "Finance"],
    ["Messenger", "Music app"],
];

const materialIcons = [
    ["equalizer", "lock"],
    ["donut_large", "question_answer"],
    ["dashboard", "person"],
    ["view_kanban", "thumb_up_alt"],
    ["table_view", "pie_chart"],
    ["account_balance_wallet", "shopping_cart"],
    ["event_note", "credit_card"],
    ["question_answer", "music_note"],
];

type ItemProps = {
    id: number;
    selected: number;
    type: number;
    onClick: () => void;
}

const CategoryItem: FC<ItemProps> = (props) => {
    const {id, type, onClick} = props;
    const itemIcon = materialIcons[id][type];

    return <button className={`category-picker__button 
    ${isSelected(props) ? "category-picker__button_active" : ""}`}
        onClick={onClick}
    >
        <span className={`category-picker__icon ${iconStyleClass}`}>
            {itemIcon}
        </span>
    </button>
}

type Props = {
    className?: string;
}

const CategoryPicker: FC<Props> = (props) => {
    const stateCategory = useSelector((state: RootState) => state.content.category);
    const stateType = useSelector((state: RootState) => state.content.type);
    const dispatch = useDispatch();

    const className = composeClassList('category-picker', props.className);

    const handleClick = (buttonId: number) => {
        dispatch(changeCategory(buttonId));
        dispatch(changeImageLoading(true));
    }

    const renderItems = () => {
        const itemsArray = [];
        for (let itemId = 0; itemId < 8; itemId++) {
            itemsArray.push(
                <CategoryItem id={itemId} key={itemId} selected={stateCategory} type={stateType} onClick={() => handleClick(itemId)} />
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