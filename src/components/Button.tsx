import { ComponentProps, PropsWithChildren } from 'react';

import clsx from 'clsx';

type Props = PropsWithChildren<ComponentProps<'button'>>;

export const Button = ({ children, className, ...rest }: Props) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
