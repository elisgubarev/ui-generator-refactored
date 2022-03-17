import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
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
                <a href="https://twitter.com/unicornplatform" target='_blank' className="footer__link">
                    <img src={twitter} alt="twitter" className="footer__icon" />
                </a>
                <a href="https://fb.com/unicornplatform" target="_blank" className="footer__link">
                    <img src={facebook} alt="twitter" className="footer__icon" />
                </a>
                <a href="https://www.instagram.com/unicornplatform" target="_blank" className="footer__link">
                    <img src={instagram} alt="twitter" className="footer__icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer;