import React, {FC} from 'react';
import {composeClassList} from "../../functions/composeClassList";

import download from '../../assets/svg/download.svg';

export type Props = {
    buttonType: 'link' | 'download';
    href?: string;
    target?: string;
    className?: string;
}

const Button: FC<Props> = (props) => {
    const getTagByType = (): keyof JSX.IntrinsicElements => {
        if (props.buttonType === 'link') return 'a';
        return 'button';
    }
    const renderIcon = () => {
        return (props.buttonType === 'download') && <img className="button__icon" src={download} alt="download icon"/>
    }
    const TagName = getTagByType();

    return (
        <TagName
            className={composeClassList(`button button_${props.buttonType}`,
                props.className)}
            href={props.href}
            target={props.target}
        >
            {renderIcon()}
            <span className="button__text">
                {props.children}
            </span>
        </TagName>
    );
}

export default Button;