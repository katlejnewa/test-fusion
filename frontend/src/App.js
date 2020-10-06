import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import './App.css';
import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';

export const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/board/:id" children={<BoardPage />} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

