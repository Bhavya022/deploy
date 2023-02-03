class Mobile {  
    #unlockPin
    constructor(model,number,unlockPin){
        this.model = model 
        this.number = number 
        this.#unlockPin = unlockPin 
        // this.getUnlockPin = function() {
        //     return this.#unlockPin
        // }   
       
      
    }  
    
    get getUnlockPin(){
        return `${this.#unlockPin}`
    }  
    set unlockPin(pin){
   return  this.#unlockPin=`${pin}`
    } 
    sendSMS(x){
        return x
    }  
    
}
  
export default Mobile
