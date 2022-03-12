import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';

type ShareItemProps = {
    type: 'twitter' | 'facebook';
}

const ShareItem: FC<ShareItemProps> = (props) => {
    const { type } = props;
    const text = "I've made an awesome UI in just a few seconds⚡️ Check it out:";
    const replaceSpaces = (text: string) => {
        return text.replace(/ /g, "%20");
    }
    const handleClick = () => {
        window.open(href, "popup", "width=600,height=600");
        return false;
    }
    const media: any = {
        twitter: {
            href: `https://twitter.com/intent/tweet?text=${replaceSpaces(text)}&url=${encodeURIComponent(document.URL)}`,
            src: twitter,
        },
        facebook: {
            href: `http://www.facebook.com/share.php?t=123&u=${encodeURIComponent(document.URL)}`,
            src: facebook,
        },
    }
    const href = media[type].href;
    const src = media[type].src;
    const alt = `${type} logo`;
    return (
        <a className="share__item" href={media[type].href} target="popup" onClick={handleClick}>
            <img className="share__icon" src={src} alt={alt} />
        </a>
    );
}

type Props = {
    className?: string;
}

const Share: FC<Props> = (props) => {
    const className = composeClassList('share', props.className)

    return (
        <div className={className}>
            <div className="share__wrapper">
                <ShareItem type='twitter' />
                <ShareItem type='facebook' />
            </div>
        </div>
    );
}

export default Share;