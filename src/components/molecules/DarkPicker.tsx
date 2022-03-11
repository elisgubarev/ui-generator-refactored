import { FC } from 'react'
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeDark } from '../../app/contentSlice';


import { composeClassList } from "../../functions/composeClassList";

type ItemProps = {
    active: number;
    onClick: () => void;
}

const Toggle: FC<ItemProps> = (props) => {
    return (
        <button className={`dark-picker__toggle ${props.active === 1 ? "dark-picker__toggle_active" : ""}`} onClick={props.onClick}></button>
    );
}

type Props = {
    className?: string;
}

const DarkPicker: FC<Props> = (props) => {
    const stateDark = useSelector((state: RootState) => state.content.dark);
    const dispatch = useDispatch();

    const className = composeClassList("dark-picker", props.className);

    const handleClick = () => {
        stateDark === 0 ? dispatch(changeDark(1)) : dispatch(changeDark(0));
    }

    return (
        <div className={className}>
            <div className="dark-picker__wrapper">
                <span className="dark-picker__label">Dark background</span>
                <Toggle active={stateDark} onClick={handleClick} />
            </div>
        </div>
    );
}

export default DarkPicker;