import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import logo from '../../assets/svg/logo.svg';

type Props = {
    className?: string;
    href?: string;
    target?: string;
    label?: string;
}

const Logo: FC<Props> = (props) => {
    const className = composeClassList('logo', props.className);

    return (
        <a
            className={className}
            href={props.href}
            target={props.target}
        >
            <div className="logo__wrapper">
                <img className="logo__image" src={logo} alt="UI Generator logo"/>
                <span className="logo__text">{props.children}</span>
            </div>
        </a>
    );
}

export default Logo;