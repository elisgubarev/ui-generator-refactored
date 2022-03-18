import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';

type Props = {
    className?: string;
}

const H2: FC<Props> = (props) => {
    const className = composeClassList('h2', props.className);

    return (
        <h2 className={className}>
            {props.children}
        </h2>
    );
}

export default H2;