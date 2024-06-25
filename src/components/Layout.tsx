import { PropsWithChildren } from 'react';

import clsx from 'clsx';

type Props = {
    background?: string;
};

export const Layout = ({ children, background }: PropsWithChildren<Props>) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};