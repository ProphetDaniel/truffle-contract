var contract = require("../");
var assert = require("assert");

describe("Deprecated json keys", function() {

  var MetaCoin_data;
  var MetaCoin;

  before("read json data", function() {
    // var data = fs.readFileSync(path.join(__dirname, "./lib/MetaCoin.json"), "utf8");
    MetaCoin_data = require("./lib/MetaCoin");
  });

  it("successfully turns `unlinked_binary` into bytecode", function() {
    MetaCoin = contract(MetaCoin_data);
    assert.equal(MetaCoin.bytecode, MetaCoin_data.unlinked_binary);
  });

});
