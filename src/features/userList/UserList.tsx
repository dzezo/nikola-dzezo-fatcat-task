import { useQuery } from '@tanstack/react-query';

import { List } from '@homework-task/components/List';
import { UserItem } from '@homework-task/features/userList/components/UserItem';
import { getUserList } from '@homework-task/features/userList/requests/getUserList';

export const UserList = () => {
    const { status, data } = useQuery({
        queryKey: ['userList'],
        queryFn: getUserList,
        refetchOnWindowFocus: false,
    });

    return (
        <List
            data={data}
            status={status}
            render={(item) => (
                <UserItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    username={item.username}
                    email={item.email}
                    phone={item.phone}
                />
            )}
        />
    );
};
