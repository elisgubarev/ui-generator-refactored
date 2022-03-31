import { FC } from 'react';
import Logo from '../molecules/Logo';
import { composeClassList } from '../../functions/composeClassList';

type Props = {
    className?: string;
}

const Navbar: FC<Props> = (props) => {
    const className = composeClassList('navbar', props.className);

    return (
        <div className={className}>
            <div className="navbar__wrapper">

            </div>
        </div>
    );
}

export default Navbar;