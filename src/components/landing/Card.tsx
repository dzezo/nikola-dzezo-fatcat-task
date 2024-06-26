import { PropsWithChildren } from 'react';

import clsx from 'clsx';

type Props = PropsWithChildren<{
    title: string;
    text: string;
}>;

export const Card = ({ title, text, children }: Props) => (
    <div
        className={clsx(
            'flex',
            'flex-col',
            'gap-4',
            'p-4',
            'bg-white',
            'py-6',
            'px-4',
            'rounded-2xl'
        )}
    >
        <h2
            className={clsx(
                'text-black',
                'text-2xl',
                'leading-normal',
                'font-medium'
            )}
        >
            {title}
        </h2>
        <p className={clsx('text-gray80', 'text-base', 'leading-relaxed')}>
            {text}
        </p>
        {children}
    </div>
);
