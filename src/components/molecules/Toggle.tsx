import { FC } from 'react'
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeDark, changeMockup } from '../../app/contentSlice';
import { changeImageLoading } from '../../app/appStateSlice';


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
    changedValue: "dark" | "mockup";
}

const Toggle: FC<Props> = (props) => {
    const { changedValue } = props;
    const stateDark = useSelector((state: RootState) => state.content.dark);
    const stateMockup = useSelector((state: RootState) => state.content.mockup);
    const dispatch = useDispatch();

    const className = composeClassList("toggle", props.className);

    const handleClick = () => {
        if (changedValue === "dark") {
            stateDark === 0 ? dispatch(changeDark(1)) : dispatch(changeDark(0));
        }
        if (changedValue === "mockup") {
            stateMockup === 0 ? dispatch(changeMockup(1)) : dispatch(changeMockup(0));
        }
        dispatch(changeImageLoading(true));
    }

    const activeState = () => {
        if (changedValue === "dark") return stateDark;
        return stateMockup;
    }

    return (
        <div className={className}>
            <div className="toggle__wrapper">
                <span className="toggle__label">{props.children}</span>
                <ToggleButton
                    active={activeState()}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}

export default Toggle;