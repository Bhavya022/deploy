class Mobile {  
    #unlockPin
    constructor(model,number,unlockPin){
        this.model = model 
        this.number = number 
        this.#unlockPin = unlockPin 
        this.getUnlockPin=function(){
            return this.#unlockPin
        } 
       this.sendSMS = function(textmessage){
          return this.textmessage
      }
    } 
    
}
  
export default Mobile
