import _ from 'lodash';
import printMe from './print.js';
import style from './style.css';



  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');


   element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
   ].join('\n\n');

    return element;
  }


 let element = component(); 
 document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');

    document.body.removeChild(element);
    element = component(); 
     document.body.appendChild(element);
    })
  }