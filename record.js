var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
};

Record.prototype = {
  setPrice: function(newPrice){
    this.price = newPrice;
  }
};



module.exports = Record;