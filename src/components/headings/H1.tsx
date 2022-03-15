import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';

type Props = {
    className?: string;
}

const H1: FC<Props> = (props) => {
    const className = composeClassList('h1', props.className);
    return (
        <h1 className={className}>{props.children}</h1>
    );
}

export default H1;