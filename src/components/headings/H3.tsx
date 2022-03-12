import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';

type Props = {
    className?: string;
}

const H3: FC<Props> = (props) => {
    const className = composeClassList('h3', props.className);
    return (
        <h3 className={className}>{props.children}</h3>
    );
}

export default H3;