import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import Button from '../molecules/Button';

type Props = {
    className?: string;
}

const SidebarDownload: FC<Props> = (props) => {
    const className = composeClassList('sidebar-download', props.className);
    return (
        <div className={className}>
            <div className="sidebar-download__wrapper">
                <Button buttonType='download' className="sidebar-download__button" >
                    Download .png
                </Button>
            </div>
        </div>
    );
}

export default SidebarDownload;