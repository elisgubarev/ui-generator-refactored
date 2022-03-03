import { FC } from 'react'
import { composeClassList } from "../../functions/composeClassList";

type ItemProps = {
    active: number;
}

type Props = {
    className?: string;
}

const DarkPicker: FC<Props> = (props) => {
    const className = composeClassList("dark-picker", props.className);

    return (
        <div className={className}>
            <div className="dark-picker__wrapper">
                123
            </div>
        </div>
    );
}

export default DarkPicker;