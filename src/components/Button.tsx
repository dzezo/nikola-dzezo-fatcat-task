import { PropsWithChildren } from 'react';

import clsx from 'clsx';

type Props = {
    onClick: () => void;
    className?: string;
};

export const Button = ({
    children,
    onClick,
    className,
}: PropsWithChildren<Props>) => {
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
            onClick={onClick}
        >
            {children}
        </button>
    );
};
