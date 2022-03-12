import { FC } from 'react';
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from "react-redux";
import { changeType } from '../../app/contentSlice';
import { changeImageLoading } from '../../app/appStateSlice';
import { composeClassList } from "../../functions/composeClassList";
import { isSelected } from "../../functions/isSelected";

type ItemProps = {
    id: number;
    selected: number;
    onClick: () => void;
}

const SwitcherButton: FC<ItemProps> = (props) => {

    return (
        <button className={`type-picker__button 
        ${isSelected(props) ? "type-picker__button_active" : ""}`}
            onClick={props.onClick}
        >
            <span className="type-picker__text">
                {props.children}
            </span>
        </button>
    );
}

type Props = {
    className?: string;
}

const TypePicker: FC<Props> = (props) => {
    const stateType = useSelector((state: RootState) => state.content.type);
    const dispatch = useDispatch();

    const className = composeClassList("type-picker", props.className);

    const handleClick = (buttonId: number) => {
        dispatch(changeType(buttonId));
        dispatch(changeImageLoading(true));
    }

    return (
        <div className={className}>
            <div className="type-picker__wrapper">
                <SwitcherButton id={0}
                    selected={stateType}
                    onClick={() => handleClick(0)}
                >
                    Desktop
                </SwitcherButton>
                <SwitcherButton id={1}
                    selected={stateType}
                    onClick={() => handleClick(1)}
                >
                    Mobile
                </SwitcherButton>
            </div>
        </div>
    );
}

export default TypePicker;