var RecordCollector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype = {
  checkCanAffordRecord: function(record){
    return (this.cash >= record.price);
  },

  buyRecord: function(record){
    if (this.checkCanAffordRecord(record)){
    this.collection.push(record);
    this.cash -= record.price;
    } else {
    return "Not enough cash";
    }
  },
 
  sellRecord: function(record, collector){
    if(collector.checkCanAffordRecord(record)){
      var index = this.collection.indexOf(record);
      var sold = this.collection.splice(index, 1);
        this.cash += record.price;
        collector.buyRecord(record);
      } else {
      return "Collector can't afford record";
      }  
  }
};

module.exports = RecordCollector;