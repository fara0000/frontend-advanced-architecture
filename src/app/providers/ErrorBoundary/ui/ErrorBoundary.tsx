import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage';
import { PageLoader } from 'widgets';

interface Props {
    children: ReactNode;
}

interface ErrorBoundaryState {
     hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, ErrorBoundaryState> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return (
                // suspense оборачиваем так как переводы недоступны иначе ибоо мы все приложение в suspense обернули
                <Suspense fallback={PageLoader}>
                    <ErrorPage />
                </Suspense>
            );
        }
        const { children } = this.props;

        return children;
    }
}
