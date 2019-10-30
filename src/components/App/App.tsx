import React from 'react';
import './App.css';
import { UseTranslationResponse, useTranslation } from 'react-i18next';
import ErrorBoundary from 'react-error-boundary';

const App: React.FC = () => {
  const { t }: UseTranslationResponse = useTranslation('appbar');

  return (
    <ErrorBoundary FallbackComponent={() => <div>{t('globalError')}</div>}>
      <div className="App">{t('title')}</div>
    </ErrorBoundary>
  );
};

export default App;
