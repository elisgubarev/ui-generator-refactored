import { FC } from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { composeClassList } from "../../functions/composeClassList";
import { generateSrc } from "../../functions/generateSrc";

import download from '../../assets/svg/download.svg';

export type Props = {
    buttonType: 'link' | 'download';
    href?: string;
    target?: string;
    className?: string;
}

const Button: FC<Props> = (props) => {
    const state = useSelector((state: RootState) => state.content);
    const className = composeClassList(`button button_${props.buttonType}`, props.className);

    const renderIcon = () => {
        return (props.buttonType === 'download') && <img className="button__icon" src={download} alt="download icon" />
    }

    const sethref = () => {
        if (props.buttonType === 'download') return generateSrc(state, 'download');
        return props.href;
    }

    return (
        <a
            className={className}
            href={sethref()}
            target={props.target}
        >
            {renderIcon()}
            <span className="button__text">
                {props.children}
            </span>
        </a>
    );
}

export default Button;