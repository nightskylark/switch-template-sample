import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.base-dark.css';
import './themes/generated/theme.additional.css';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './dx-styles.scss';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './contexts/navigation';
import { ThemeProvider } from './contexts/theme';
import { AuthProvider, useAuth } from './contexts/auth';
import { useScreenSizeClass } from './utils/media-query';
import Content from './Content';
import UnauthenticatedContent from './UnauthenticatedContent';
import { useTheme } from './contexts/theme';

function App() {
  const { user, loading } = useAuth();
  const { dark } = useTheme();
  const screenSizeClass = useScreenSizeClass();

  return <div className={`app ${screenSizeClass} ${dark ? 'dx-swatch-base-dark' : ''}`}>
    {
      loading ? <LoadPanel visible={true} /> :
        user ? <Content/> : <UnauthenticatedContent />
    }
  </div>;
}

export default function Root() {
  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
          <ThemeProvider>
              <App />
          </ThemeProvider>
        </NavigationProvider>
      </AuthProvider>
    </Router>
  );
}
