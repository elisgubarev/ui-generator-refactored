import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';

type Props = {
    className?: string;
}

const ResultSection: FC<Props> = (props) => {
    const className = composeClassList('result-section', props.className);
    return (
        <div className={className}>
            <div className='result-section__wrapper'>
                {props.children}
            </div>
        </div>
    );
}

export default ResultSection;