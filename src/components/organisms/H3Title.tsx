import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import H3 from '../headings/H3';

type Props = {
    className?: string;
    label?: string;
}

const H3Title: FC<Props> = (props) => {
    const className = composeClassList('h3-title', props.className);
    return (
        <div className={className}>
            <div className='h3-title__wrapper'>
                {props.label && <H3 className="h3-title__label">{props.label}</H3>}
                <div className="h3-title__content">{props.children}</div>
            </div>
        </div>
    );
}

export default H3Title;