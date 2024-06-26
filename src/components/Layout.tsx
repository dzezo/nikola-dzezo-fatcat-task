import { PropsWithChildren } from 'react';

import clsx from 'clsx';

type Props = PropsWithChildren<{
    background?: string;
}>;

export const Layout = ({ children, background }: Props) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
