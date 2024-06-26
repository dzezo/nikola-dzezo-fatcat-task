import { ComponentProps, ForwardedRef, forwardRef } from 'react';

import clsx from 'clsx';

type Props = ComponentProps<'input'> & {
    error?: string;
};

const Input = (
    { error, className, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
) => {
    return (
        <div className={clsx('flex', 'flex-col')}>
            <input
                ref={ref}
                className={clsx(
                    'border',
                    'rounded-md',
                    'p-2',
                    'outline-none',
                    'transition',
                    'duration-200',
                    'focus:border-blue-500',
                    error && 'border-red-500',
                    className
                )}
                {...props}
            />
            {error && (
                <span className={clsx('text-red-500', 'mt-1')}>{error}</span>
            )}
        </div>
    );
};

export const InputField = forwardRef(Input);
