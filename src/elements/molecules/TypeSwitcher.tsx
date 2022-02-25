import React, {FC, useState} from 'react';
import {RootState} from '../../app/store'
import {useSelector, useDispatch} from "react-redux";
import {changeType} from '../../app/contentSlice';
import {composeClassList} from "../../functions/composeClassList";

type ItemProps = {
    id: number;
    selected: number;
    onClick: () => void;
}

const SwitcherButton: FC<ItemProps> = (props) => {
    const isSelected = () => {
        return (props.selected === props.id);
    }

    return (
        <button className={`type-switcher__button 
        ${isSelected() ? "type-switcher__active" : ""}`}
                onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

type Props = {
    className?: string;
}

const TypeSwitcher: FC<Props> = (props) => {
    const stateType = useSelector((state: RootState) => state.content.type);
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(stateType);

    const handleClick = (buttonId: number) => {
        setSelected(buttonId);
        dispatch(changeType(buttonId));
    }

    return (
        <div className={composeClassList("type-switcher", props.className)}>
            <div className="type-switcher__wrapper">
                <SwitcherButton id={0}
                                selected={selected}
                                onClick={() => handleClick(0)}
                >
                    Mobile
                </SwitcherButton>
                <SwitcherButton id={1}
                                selected={selected}
                                onClick={() => handleClick(1)}
                >
                    Desktop
                </SwitcherButton>
            </div>
        </div>
    );
}

export default TypeSwitcher;