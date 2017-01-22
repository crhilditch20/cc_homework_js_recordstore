var RecordCollector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype = {
  buyRecord: function(record){
    if (this.cash >= record.price){
    this.collection.push(record);
    this.cash -= record.price;
    } else {
    return "Not enough cash";
    }
  },
  sellRecord: function(record, collector){
    var index = this.collection.indexOf(record);
    var sold = this.collection.splice(index, 1);
      if(collector.buyRecord(sold[0]) != "Not enough cash"){
          this.cash += record.price;
        } else {
        return "Collector can't afford record";
        }
  }
};

module.exports = RecordCollector;