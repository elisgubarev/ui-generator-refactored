import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import H3 from '../headings/H3';

type Props = {
    className?: string;
    label?: string;
}

const SidebarSection: FC<Props> = (props) => {
    const className = composeClassList('section', props.className);
    return (
        <div className={className}>
            <div className='section__wrapper'>
                {props.label && <H3 className="section__label">{props.label}</H3>}
                <div className="section__content">{props.children}</div>
            </div>
        </div>
    );
}

export default SidebarSection;