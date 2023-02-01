'use client'

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


const ReactQueryWrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default ReactQueryWrapper;