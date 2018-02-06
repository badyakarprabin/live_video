import { createBrowserHistory } from 'history';

export default createBrowserHistory({
    getUserConfirmation: (message, callback) => {
        return setTimeout(callback(true), 100000);
    }
});
