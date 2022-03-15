import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import H3 from '../headings/H3';

type Props = {
    className?: string;
    label?: string;
}

const SidebarSection: FC<Props> = (props) => {
    const className = composeClassList('sidebar-section', props.className);
    return (
        <div className={className}>
            <div className='sidebar-section__wrapper'>
                {props.label && <H3 className="sidebar-section__label">{props.label}</H3>}
                <div className="sidebar-section__content">{props.children}</div>
            </div>
        </div>
    );
}

export default SidebarSection;