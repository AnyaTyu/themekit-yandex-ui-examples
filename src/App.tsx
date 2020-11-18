import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { configureRootTheme, Theme } from '@yandex/ui/Theme'
// import { theme as themeDefault } from './theme/theme';
// import { theme as themeCat } from './theme/theme-cat';

import { Spin } from '@yandex/ui/Spin/desktop/bundle';

// const themes: Record<string, Theme> = { themeDefault, themeCat }

function App() {
  const [currentTheme, setCurrentTheme] = useState('themeDefault');
  const [themes, setThemes] = useState<Record<string, Theme>>({});

  // useEffect(() => configureRootTheme({ theme: themes[theme]}), [theme]);

  useEffect(() => {
    if (currentTheme === 'themeDefault' && themes.themeDefault === undefined) {
      import('./theme/theme')
        .then(m => {
          setThemes({ ...themes, themeDefault: m.theme });
          configureRootTheme({ theme: m.theme });
        });
    }
  }, [currentTheme]);

  return (
    <div className="App">
      <Spin progress size="m" view="default" ></Spin>
    </div>
  );
}

export default App;
