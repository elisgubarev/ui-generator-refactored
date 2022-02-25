import React, {FC} from 'react';
import {composeClassList} from "../functions/composeClassList";

import download from '../assets/svg/download.svg';

export type Props = {
    buttonType: 'link' | 'download';
    href?: string;
    target?: string;
    className?: string;
}

const getTagByType = (type: string): keyof JSX.IntrinsicElements => {
    if (type === 'link') return 'a';
    return 'button';
}

const renderIcon = (type: string) => {
    return (type === 'download') && <img className="button__icon" src={download} alt="download icon"/>
}

const Button: FC<Props> = (props) => {
    const TagName = getTagByType(props.buttonType);
    return (
        <TagName
            className={composeClassList(`button button_${props.buttonType}`,
            props.className)}
            href={props.href}
            target={props.target}
        >
            {renderIcon(props.buttonType)}
            <span className="button__text">
                {props.children}
            </span>
        </TagName>
    );
}

export default Button;