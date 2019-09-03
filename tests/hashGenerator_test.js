const hashGenerator = require('../hashGenerator');
const assert = require('assert');

(() => {
    console.log("빈 URL 입력시 에러 발생")
    try {
        hashGenerator.generate("");
        assert.fail()
    } catch (e) {
        assert.strictEqual(e, "EMPTY URL")
    }
})();

(() => {
    const hash = hashGenerator.generate("http://www.reimaginer.me");
    assert.strictEqual(true, !!hash)
})();
