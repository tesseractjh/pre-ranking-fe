import ComponentError from '@components/common/Fallback/Error/ComponentError';
import { ErrorBoundary } from 'react-error-boundary';

function withErrorBoundary<T>(
  Component: React.ComponentType<T>
): React.FC<T & JSX.IntrinsicAttributes> {
  function ComponentWithErrorBoundary(props: T & JSX.IntrinsicAttributes) {
    return (
      <ErrorBoundary fallback={<ComponentError />}>
        <Component {...props} />
      </ErrorBoundary>
    );
  }

  return ComponentWithErrorBoundary;
}

export default withErrorBoundary;
