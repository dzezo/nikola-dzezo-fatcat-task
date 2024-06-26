import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Landing } from '@homework-task/components/landing/Landing';
import '@homework-task/styles.css';
import { PostForm } from '@homework-task/features/postForm/PostForm';

const queryClient = new QueryClient({});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
                <PostForm />
            </main>
        </QueryClientProvider>
    );
}

export default App;
