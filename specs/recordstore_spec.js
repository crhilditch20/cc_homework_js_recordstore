var assert = require('assert');
var Record = require('../record');
var RecordStore = require('../record_store');

describe('record', function(){
  var record1; 
  var record2;
  var recordStore;

  beforeEach(function(){
    record1 = new Record("David Bowie", "Blackstar", 6.00);
    record2 = new Record("Imelda May", "Tribal", 5.00);
    recordStore = new RecordStore("Record Cave", "Edinburgh");
  });

  it('should have a name', function(){
    assert.equal("Record Cave", recordStore.name);
  });

  it('should have a city', function(){
    assert.equal("Edinburgh", recordStore.city);
  });

  it('should start with empty inventory', function(){
    assert.deepEqual([], recordStore.inventory);
  });

  it('should start with zero balance', function(){
    assert.equal(0, recordStore.balance);
  });

  it('can add a record', function(){
    recordStore.addRecord(record1);
    assert.deepEqual([record1], recordStore.inventory);
  });


});