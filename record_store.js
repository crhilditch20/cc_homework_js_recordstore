var RecordStore = function(name, city, cash){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = cash;
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
  sellRecord: function(recordTitle, collector){
    var index = this.inventory.findIndex(function(record){
        return (record.title === recordTitle)
      });
    var sold = this.inventory.splice(index, 1);
    if (collector){
      collector.buyRecord(sold[0]);
    }
    this.balance += sold[0].price;
    
  },
  getTotalValue: function(){
    var inventoryValue = this.getInventoryValue();
    var cashValue = this.balance;
    return inventoryValue + cashValue;
  } 
};



module.exports = RecordStore;