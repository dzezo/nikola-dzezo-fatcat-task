import clsx from 'clsx';

import { UserList } from '@homework-task/features/userList/UserList';

export default function Task2Page() {
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
            <UserList />
        </div>
    );
}
