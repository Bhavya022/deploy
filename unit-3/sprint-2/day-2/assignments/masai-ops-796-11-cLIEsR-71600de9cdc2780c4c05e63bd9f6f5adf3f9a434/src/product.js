function Product(name,brand,price,description) {
  // Complete the constructor function 
  this.name=name,
  this.price=price,
  this.brand=brand,
  this.description=description,
  this.sold=false

}

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus
Product.prototype.changePrice = function(newPrice){
  this.price=newPrice
} 
Product.prototype.toggleStatus = function(){
  if(this.sold==false){
    return this.sold=true
  } 
  else{
    return this.sold=false
  }
}
// Do not change this
export default Product;
