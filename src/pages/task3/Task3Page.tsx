import clsx from 'clsx';

import { PostForm } from '@homework-task/features/postForm/PostForm';

export default function Task3Page() {
    return (
        <div
            className={clsx(
                'flex',
                'items-center',
                'justify-center',
                'max-w-[400px]',
                'max-h-[800px]',
                'overflow-auto',
                'mx-auto',
                'm-5',
                'p-5',
                'border',
                'border-black',
                'rounded-lg'
            )}
        >
            <PostForm />
        </div>
    );
}
