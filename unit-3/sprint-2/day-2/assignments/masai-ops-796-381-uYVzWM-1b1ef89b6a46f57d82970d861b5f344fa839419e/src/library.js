class Book { 
    constructor(name,author,section){
        this.name=name,
        this.author=author,
        this.section=section
    }
} 

const b = new Book("Java", "Gary Cornell", "DSA") 

class Section {
    constructor(name){
        this.name=name,
        this.books=[]
    } 

}
Section.prototype.addBookToSection=function(x){ 
    if(this.checkbook(x.name,x.author)){
        this.books.push(x)
    }

}  
Section.prototype.checkbook=function(name,author){
    for(let book of this.books){
        if(book.name === name && book.author === author){
            return false
        }
    } 
    return true
}

class Library {

     constructor(name){
        this.name=name;
        this.sections=[];
    }
} 

Library.prototype.addSection = function(y){ 
    if(this.checksection(y.name)){
        this.sections.push(y)
    }
    
}
Library.prototype.checksection=function(s){
    for(let section of this.sections){
        if(section.name===s){
            return false
        }
    } 
    return true
}  
Library.prototype.addBookToLibrary=function(book) {
    for (let section of this.sections) {
      if (book.section === section.name) {
        section.addBookToSection(book);
      }
    }
  }
// Do not change the export statement below

export { Library, Section, Book };
