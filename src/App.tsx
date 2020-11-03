import React from 'react';
import logo from './logo.svg';
import './App.css';

import { configureRootTheme } from '@yandex/ui/Theme'
import { theme } from './theme/theme';

import { Spin } from '@yandex/ui/Spin/desktop/bundle';

configureRootTheme({ theme })

function App() {
  return (
    <div className="App">
      <Spin progress size="m" view="default" ></Spin>
    </div>
  );
}

export default App;
