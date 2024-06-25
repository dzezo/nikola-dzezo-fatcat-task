import clsx from 'clsx';

import { User } from '@homework-task/features/userList/requests/getUserList';

type Props = Pick<User, 'id' | 'name' | 'username' | 'email' | 'phone'>;

export const UserItem = ({ id, name, username, email, phone }: Props) => {
    return (
        <div
            className={clsx(
                'bg-white',
                'shadow-md',
                'rounded-lg',
                'p-6',
                'm-2'
            )}
        >
            <div className={clsx('text-xl', 'font-bold', 'mb-2')}>
                {id}: {name}
            </div>
            <div className={clsx('text-gray-500', 'mb-2')}>@{username}</div>
            <div className={clsx('text-blue-500', 'underline', 'mb-2')}>
                {email}
            </div>
            <div className={clsx('text-gray-500')}>{phone}</div>
        </div>
    );
};
