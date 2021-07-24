import { createBrowserHistory } from 'history'
let history = null;


export default function getHistory() {
    if (history == null) {
        history = createBrowserHistory();
    };
    return history;
}

