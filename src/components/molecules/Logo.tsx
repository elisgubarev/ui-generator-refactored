import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import Link from './Link';
import logo from '../../assets/svg/logo.svg';

type TaglineProps = {}

const Tagline: FC<TaglineProps> = (props) => {
    return <div></div>
}

type Props = {
    className?: string;
    href?: string;
    target?: string;
    label?: string;
    tagline?: boolean;
}

const Logo: FC<Props> = (props) => {
    const className = composeClassList('logo', props.className);

    return (
        <div className={className}>
            <a
                className="logo__wrapper"
                href={props.href}
                target={props.target}
            >
                <img className="logo__image" src={logo} alt="UI Generator logo" />
                <span className="logo__text">{props.children}</span>
            </a>
            {
                props.tagline &&
                <div className="logo__tagline">
                    By <Link className="logo__tagline-link" href="https://unicornplatform.com" target="_blank">Unicorn Platform</Link>
                </div>
            }
        </div>
    );
}

export default Logo;