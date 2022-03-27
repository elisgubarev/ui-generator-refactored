import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import { url } from '../../app/globalData';
import twitter from '../../assets/svg/twitter_mono.svg';
import facebook from '../../assets/svg/facebook_mono.svg';
import instagram from '../../assets/svg/instagram_mono.svg';

type Props = {
    className?: string;
}

const Footer: FC<Props> = (props) => {
    const className = composeClassList('footer', props.className);
    return (
        <div className={className}>
            <div className="footer__wrapper">
                <a href={url.twitter} target='_blank' className="footer__link">
                    <img src={twitter} alt="twitter" className="footer__icon" />
                </a>
                <a href={url.facebook} target="_blank" className="footer__link">
                    <img src={facebook} alt="twitter" className="footer__icon" />
                </a>
                <a href={url.instagram} target="_blank" className="footer__link">
                    <img src={instagram} alt="twitter" className="footer__icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer;