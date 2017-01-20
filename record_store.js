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
  } 
};

// getTotal: function(){
//   return this.accounts.reduce(function(accumulator, account){
//     return (accumulator + account.balance);
//   },0);

module.exports = RecordStore;