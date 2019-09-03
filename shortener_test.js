const shortener = require('./shortener');
const assert = require('assert');

(() => {

    try {
        shortener.register("");
        assert.fail()
    } catch (e) {
        assert.strictEqual(e, "EMPTY URL")
    }

})();
