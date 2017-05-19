// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

/* Dependencies */
import './lib/modernizr';
import routes from './js/routes';
import ReactDOM from 'react-dom';

if (! Modernizr.flexbox ||
  ! Modernizr.rgba) {
  alert('Unfortunately, your browser appears to be too old. ' +
    'We recommend the latest version of Chrome, Firefox, Safari, or Internet Explorer. ' +
    'If you are using the latest Internet Explorer, you will need to turn off Compatibility Mode.');
}

ReactDOM.render(routes, document.getElementById('content'));
document.body.classList.remove('loading');
