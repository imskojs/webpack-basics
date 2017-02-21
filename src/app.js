// Check this out in public/byProductOfRequiredConfigProperties.js
import moment from 'moment'
import leftPad from '../non_node_modules/left-pad'
import sub1 from './app.sub1.js'
import sub2 from './app.sub2.js'

const text = document.createTextNode(' This is appended by JavaScript')
document.querySelector('h1').appendChild(text)

class TestingBabel {
  constructor(){
    console.log(moment().format())
  }
}

const test = new TestingBabel()

