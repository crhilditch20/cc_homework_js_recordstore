var assert = require('assert');
var RecordCollector = require('../record_collector');
var Record = require('../record');
var RecordStore = require('../record_store');

describe('record collector', function(){
  var record1;
  var record2;
  var recordStore;
  var collector1;
  var collector2;

  beforeEach(function(){
    record1 = new Record("David Bowie", "Blackstar", 6.00);
    record2 = new Record("Imelda May", "Tribal", 5.00);
    recordStore = new RecordStore("Record Cave", "Edinburgh", 300);
    collector1 = new RecordCollector("Jeff", 30.00);
    collector2 = new RecordCollector("Steve", 20.00);
  });

  it('should have a name', function(){
    assert.equal("Jeff", collector1.name);
  });

  it('should have some cash', function(){
    assert.equal(30.00, collector1.cash);
  });

  it('should start with empty collection', function(){
    assert.deepEqual([], collector1.collection);
  });

  it('can buy record if can afford it', function(){
    collector1.buyRecord(record1);
    assert.equal(24.00, collector1.cash.toFixed(2));
    assert.deepEqual([record1], collector1.collection);
  });

  it('cannot buy record if cannot afford it', function(){
    collector1.cash = 0;
    assert.equal("Not enough cash", collector1.buyRecord(record1));
  });

  it('can sell record to another collector', function(){
    collector1.buyRecord(record1);
    collector1.sellRecord(record1, collector2);
    assert.deepEqual([], collector1.collection);
    assert.deepEqual([record1], collector2.collection);
  });



});