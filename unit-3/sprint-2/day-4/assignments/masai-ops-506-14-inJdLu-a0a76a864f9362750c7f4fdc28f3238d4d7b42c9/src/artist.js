function Artist(name, skill, profession){
    this.name=name;
    this.skill=skill;
    this.profession=profession;
}
Artist.prototype.getProfession = function(){
    return this.profession;
}  
Artist.prototype.print = function(){
    return `I am ${this.name}`;
} 
let artist = new Artist('Rahul Dravid','Cricket','Cricketer');
var artistsObject = Object.create(artist);


// Do not change this
export {Artist, artistsObject};
