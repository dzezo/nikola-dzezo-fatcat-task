import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Landing } from '@homework-task/components/landing/Landing';
import '@homework-task/styles.css';
import { ExamplePage } from '@homework-task/pages/example/ExamplePage';

const queryClient = new QueryClient({});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
                <ExamplePage />
            </main>
        </QueryClientProvider>
    );
}

export default App;
