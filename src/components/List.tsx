import { ReactNode } from 'react';

import clsx from 'clsx';

type Props<T> = {
    data: T[] | undefined;
    status: 'pending' | 'error' | 'success';
    render: (item: T) => ReactNode;
};
export const List = <T,>({ data, status, render }: Props<T>) => {
    if (status === 'pending') {
        return (
            <div
                className={clsx(
                    'text-blue-500',
                    'font-bold',
                    'h-64',
                    'flex',
                    'items-center',
                    'justify-center'
                )}
            >
                Loading...
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div
                className={clsx(
                    'text-red-500',
                    'font-bold',
                    'h-64',
                    'flex',
                    'items-center',
                    'justify-center'
                )}
            >
                Error
            </div>
        );
    }

    return (
        <div className={clsx('flex', 'flex-col', 'gap-2')}>
            {data?.map((item) => render(item))}
        </div>
    );
};
