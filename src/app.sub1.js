// app.sub1.js

console.log('app.sub1.js')
export class test {
  // this will be tree shaked as it is not being used anywhere
  constructor(){
    console.log('test')
  }
}