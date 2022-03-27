import { FC } from 'react'
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeDark, changeMockup } from '../../app/contentSlice';
import { addUrlParam } from '../../functions/addUrlParam';


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
        let newState;
        if (changedValue === "dark") {
            stateDark === 0 ? newState = 1 : newState = 0;
            dispatch(changeDark(newState));
            addUrlParam('dark', newState)
        }
        if (changedValue === "mockup") {
            stateMockup === 0 ? newState = 1 : newState = 0;
            dispatch(changeMockup(newState));
            addUrlParam('mockup', newState)
        }
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