import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { composeClassList } from '../../functions/composeClassList';
import { categories } from '../../app/globalData';
import H3 from '../headings/H3';

type Props = {
    className?: string;
    label?: string;
    showCategoryName?: boolean;
}

const H3Title: FC<Props> = (props) => {
    const className = composeClassList('h3-title', props.className);
    const category = useSelector((state: RootState) => state.content.category);
    const type = useSelector((state: RootState) => state.content.type);

    return (
        <div className={className}>
            <div className='h3-title__wrapper'>
                <div className="h3-title__label-wrapper">
                    {props.label && <H3 className="h3-title__label">{props.label}</H3>}
                    {props.showCategoryName && <span className="h3-title__category-name">({categories[category][type]})</span>}
                </div>
                <div className="h3-title__content">{props.children}</div>
            </div>
        </div>
    );
}

export default H3Title;