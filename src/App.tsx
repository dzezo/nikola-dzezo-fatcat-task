import { Suspense, lazy } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import '@homework-task/styles.css';
import { Landing } from '@homework-task/components/landing/Landing';

const Task2Page = lazy(() => import('@homework-task/pages/task2/Task2Page'));
const Task3Page = lazy(() => import('@homework-task/pages/task3/Task3Page'));
const Task4Page = lazy(() => import('@homework-task/pages/task4/Task4Page'));

const queryClient = new QueryClient({});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/task2" element={<Task2Page />} />
                        <Route path="/task3" element={<Task3Page />} />
                        <Route path="/task4" element={<Task4Page />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
