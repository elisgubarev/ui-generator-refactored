import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';

type RowProps = {
    className?: string;
}

const Row: FC<RowProps> = (props) => {
    const className = composeClassList('bottom-info-layout__row', props.className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

type Props = {
    className?: string;
}

const BottomInfoLayout: FC<Props> = (props) => {
    const className = composeClassList('main-layout', props.className);

    return (
        <div className={className}></div>
    );
}

export default BottomInfoLayout;