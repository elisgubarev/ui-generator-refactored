import { FC } from 'react';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../app/contentSlice'
import { composeClassList } from '../../functions/composeClassList';
import { isSelected } from '../../functions/isSelected';

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
    }

    return (
        <div className={className}>
            <div className="category-picker__wrapper">
                <CategoryItem id={0} selected={stateCategory} type={stateType} onClick={() => handleClick(0)} />
                <CategoryItem id={1} selected={stateCategory} type={stateType} onClick={() => handleClick(1)} />
                <CategoryItem id={2} selected={stateCategory} type={stateType} onClick={() => handleClick(2)} />
                <CategoryItem id={3} selected={stateCategory} type={stateType} onClick={() => handleClick(3)} />
                <CategoryItem id={4} selected={stateCategory} type={stateType} onClick={() => handleClick(4)} />
                <CategoryItem id={5} selected={stateCategory} type={stateType} onClick={() => handleClick(5)} />
                <CategoryItem id={6} selected={stateCategory} type={stateType} onClick={() => handleClick(6)} />
                <CategoryItem id={7} selected={stateCategory} type={stateType} onClick={() => handleClick(7)} />
            </div>
        </div>
    );
}

export default CategoryPicker;