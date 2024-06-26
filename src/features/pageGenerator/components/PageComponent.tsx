import { ComponentProps, ComponentType } from 'react';

import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';

type Props<T extends ComponentName> = Extract<ComponentConfig, { type: T }>;

export const PageComponent = <T extends ComponentName>({
    type,
    props,
}: Props<T>) => {
    const Component = componentMapping[type] as ComponentType<typeof props>;

    return <Component {...props} />;
};

const componentMapping = {
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentTrustBar: TrustBar,
} as const;

type ComponentMapping = typeof componentMapping;
type ComponentName = keyof ComponentMapping;

export type ComponentConfig = {
    [Name in ComponentName]: {
        type: Name;
        props: ComponentProps<ComponentMapping[Name]>;
    };
}[ComponentName];
