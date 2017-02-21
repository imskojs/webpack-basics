// Check this out in public/byProductOfRequiredConfigProperties.js
import sub1 from './app.sub1.js'
import sub2 from './app.sub2.js'

var text = document.createTextNode(' This is appended by JavaScript');
document.querySelector('h1').appendChild(text);