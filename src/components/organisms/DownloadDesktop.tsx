import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import Button from '../molecules/Button';

type Props = {
    className?: string;
}

const DownloadDesktop: FC<Props> = (props) => {
    const className = composeClassList('download-desktop', props.className);
    return (
        <div className={className}>
            <div className="download-desktop__wrapper">
                <Button buttonType='download' className="download-desktop__button" >
                    Download .png
                </Button>
            </div>
        </div>
    );
}

export default DownloadDesktop;