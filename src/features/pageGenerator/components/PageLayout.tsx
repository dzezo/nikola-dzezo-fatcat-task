import { ComponentProps, ComponentType } from 'react';

import { Layout } from '@homework-task/components/Layout';
import {
    ComponentConfig,
    PageComponent,
} from '@homework-task/features/pageGenerator/components/PageComponent';

type Props<T extends LayoutName> = Extract<LayoutConfig, { type: T }>;

export const PageLayout = <T extends LayoutName>({
    type,
    props,
    components,
}: Props<T>) => {
    const Component = layoutMapping[type] as ComponentType<typeof props>;

    return (
        <Component {...props}>
            {components.map((componentConfig, index) => (
                <PageComponent key={index} {...componentConfig} />
            ))}
        </Component>
    );
};

const layoutMapping = {
    layoutSection: Layout,
} as const;

type LayoutMapping = typeof layoutMapping;
type LayoutName = keyof LayoutMapping;

export type LayoutConfig = {
    [Name in LayoutName]: {
        type: Name;
        props: Omit<ComponentProps<LayoutMapping[Name]>, 'children'>;
        components: ComponentConfig[];
    };
}[LayoutName];
