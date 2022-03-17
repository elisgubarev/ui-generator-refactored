import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import quotes from '../../assets/svg/quotes.svg';

type Props = {
    className?: string;
    photoSrc: string;
    name: string;
    info: string;
}

const Testimonial: FC<Props> = (props) => {
    const className = composeClassList('testimonial', props.className);
    return (
        <div className={className}>
            <img src={quotes} alt="quotes icon" className="testimonial__icon" />
            <div className="testimonial__wrapper">
                <div className="testimonial__text">{props.children}</div>
                <div className="testimonial__author-box">
                    <img src={props.photoSrc} alt="testimonial author" className="testimonial__author-photo" />
                    <div className="testimonial__name-box">
                        <div className="testimonial__name">{props.name}</div>
                        <div className="testimonial__info">{props.info}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Testimonial;