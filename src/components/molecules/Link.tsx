import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';


type Props = {
    href?: string;
    target?: string;
    className?: string;
}

const Link: FC<Props> = (props) => {
    const className = composeClassList('link', props.className)
    return (
        <a
            className={className}
            href={props.href}
            target={props.target}
        >
            {props.children}
        </a>
    );
}

export default Link;