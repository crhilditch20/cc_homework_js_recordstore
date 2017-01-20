var assert = require('assert');
var RecordCollector = require('../record_collector');
var Record = require('../record');
var RecordStore = require('../record_store');

describe('record collector', function(){
  var record1;
  var record2;
  var recordStore;
  var recordCollector;

  beforeEach(function(){
    record1 = new Record("David Bowie", "Blackstar", 6.00);
    record2 = new Record("Imelda May", "Tribal", 5.00);
    recordStore = new RecordStore("Record Cave", "Edinburgh");
    recordCollector = new RecordCollector("Jeff", 30.00);
  });

  it('should have a name', function(){
    assert.equal("Jeff", recordCollector.name);
  });

  it('should have some cash', function(){
    assert.equal(30.00, recordCollector.cash);
  });

  it('should start with empty collection', function(){
    assert.deepEqual([], recordCollector.collection);
  });

});