import { FC } from 'react'
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeDark } from '../../app/contentSlice';


import { composeClassList } from "../../functions/composeClassList";

type ItemProps = {
    active: number;
    onClick: () => void;
}

const ToggleButton: FC<ItemProps> = (props) => {
    return (
        <button className={`toggle__button ${props.active === 1 ? "toggle__button_active" : ""}`} onClick={props.onClick}></button>
    );
}

type Props = {
    className?: string;
}

const Toggle: FC<Props> = (props) => {
    const stateDark = useSelector((state: RootState) => state.content.dark);
    const dispatch = useDispatch();

    const className = composeClassList("toggle", props.className);

    const handleClick = () => {
        stateDark === 0 ? dispatch(changeDark(1)) : dispatch(changeDark(0));
    }

    return (
        <div className={className}>
            <div className="toggle__wrapper">
                <span className="toggle__label">Dark background</span>
                <ToggleButton active={stateDark} onClick={handleClick} />
            </div>
        </div>
    );
}

export default Toggle;