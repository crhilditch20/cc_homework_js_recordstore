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

});