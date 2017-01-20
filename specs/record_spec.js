var assert = require('assert');
var Record = require('../record');

describe('record', function(){
  var record1 = new Record("David Bowie", "Blackstar", 6.00);
  var record2 = new Record("Imelda May", "Tribal", 5.00);

  it('should have an artist', function(){
    assert.equal("David Bowie", record1.artist);
    assert.equal("Imelda May", record2.artist);
  });

  it('should have a title', function(){
    assert.equal("Blackstar", record1.title);
    assert.equal("Tribal", record2.title);
  });

  it('should have a price', function(){
    assert.equal(6.00, record1.price);
    assert.equal(5.00, record2.price);
  });

  it('can change price', function(){
    record1.setPrice(7.00);
    assert.equal(7.00, record1.price);
  });
});