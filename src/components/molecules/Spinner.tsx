import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';

type Props = {
    className?: string;
}

const Spinner: FC<Props> = (props) => {
    const className = composeClassList('spinner', props.className);

    return (
        <div className={className}>
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="20" />
            </svg>
        </div>
    );
}

export default Spinner;