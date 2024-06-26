import {
    LayoutConfig,
    PageLayout,
} from '@homework-task/features/pageGenerator/components/PageLayout';

type Props = {
    pageConfig: LayoutConfig[];
};

export const PageGenerator = ({ pageConfig }: Props) => {
    return (
        <>
            {pageConfig.map((layoutConfig, index) => (
                <PageLayout key={index} {...layoutConfig} />
            ))}
        </>
    );
};

export type PageConfig = Props['pageConfig'];
