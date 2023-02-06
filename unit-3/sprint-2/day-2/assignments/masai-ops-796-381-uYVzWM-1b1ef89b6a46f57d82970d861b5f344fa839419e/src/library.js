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
 this.books.push(x)
}
class Library {

    constructor(name){
        this.name=name,
        this.sections=[]
    }
} 

Library.prototype.addSection = function(y){
    this.sections.push(y)
}

// Do not change the export statement below

export { Library, Section, Book };
