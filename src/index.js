// Dependencies
import ReactDOM from 'react-dom';

// Routes
import routes from './js/routes';

ReactDOM.render(routes, document.getElementById('content'));
document.body.classList.remove('loading');
