import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Landing } from '@homework-task/components/landing/Landing';
import { UserList } from '@homework-task/features/userList/UserList';
import '@homework-task/styles.css';

const queryClient = new QueryClient({});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
                <UserList />
            </main>
        </QueryClientProvider>
    );
}

export default App;
