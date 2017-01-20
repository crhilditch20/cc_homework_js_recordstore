var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },
  listInventory: function(){
    var list = this.inventory.map(function(record){
      return record.artist + ": " + record.title;
    });
     return list.toString();
  },
  getInventoryValue: function(){
    return this.inventory.reduce(function(accumulator, record){
      return (accumulator + record.price);
    }, 0);
  },
  sellRecord: function(recordTitle){
      var index = this.inventory.findIndex(function(record){
        return (record.title === recordTitle)
      });
      var sold = this.inventory.splice(index, 1);
      this.balance += sold[0].price;
  } 
};



module.exports = RecordStore;