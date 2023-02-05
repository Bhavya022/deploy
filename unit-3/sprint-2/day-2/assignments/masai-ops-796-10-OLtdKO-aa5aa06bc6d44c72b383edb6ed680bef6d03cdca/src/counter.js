class Counter {
  // Write your code here
  // Initially value = 0
  // Complete this Counter class as per the problem statement 
//   getValue will return the current value of counter.
// addValue will take x as parameter and add it to the current value.
// reduceValue will take x as parameter and subtract it to the current value.
// resetValue will reset the counter to zero  
counter=0;
 constructor(value){
  this.value=this.counter
 }
 getValue(){
  return this.value
 } 
 addValue(x){
  return this.value+=x
 } 
 reduceValue(x){
  return this.value-=x
 } 
 resetValue(){
  return (this.value=this.counter)
 }
}

// Do not change this
export default Counter;
