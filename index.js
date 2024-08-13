import React from 'react'; // Import React
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Wrap the App component in the Redux Provider
const AppWrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
