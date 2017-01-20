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
  }
};

module.exports = RecordCollector;