import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import H1 from '../../components/headings/H1';
import landing from '../../assets/images/useCaseLanding.png';
import prototype from '../../assets/images/useCasePrototype.png';
import presentation from '../../assets/images/useCasePresentation.png';
import blog from '../../assets/images/useCaseBlog.png';

type TipProps = {
    noTip?: boolean;
    id: number;
}

const Tip: FC<TipProps> = (props) => {
    const image = [landing, prototype, presentation, blog];
    const { id, noTip } = props;
    if (noTip) {
        return (
            <>
                {props.children}
            </>
        );
    }
    return (
        <>
            <span
                data-html={true}
                data-tip={`<img class='tooltip-custom__picture' src=${image[id]} alt='Use case ${id}'/>`}
                data-class="tooltip-custom tooltip-custom_image"
                className="tooltip-custom__use-case"
                data-place="bottom"
            >
                {props.children}
            </span>
        </>
    );

}

type Props = {
    className?: string;
    noTip?: boolean;
}

const H1Title: FC<Props> = (props) => {
    const className = composeClassList('h1-title', props.className);
    return (
        <div className={className}>
            <div className="h1-title__wrapper">
                <H1 className="h1-title__h1">{props.children}</H1>
                <div className="h1-title__subtitle">
                    Create mockup (fake) UI for your{' '}
                    <Tip id={0} noTip={props.noTip}>landing page</Tip>,{' '}
                    <Tip id={1} noTip={props.noTip}>prototype</Tip>,{' '}
                    <Tip id={2} noTip={props.noTip}>presentation</Tip>, or{' '}
                    <Tip id={3} noTip={props.noTip}>blog post</Tip>.{' '}
                    Download free PNG files.
                </div>
            </div>
        </div>
    );
}

export default H1Title;