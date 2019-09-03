const shortener = require('../shortener');
const assert = require('assert');

(() => {
    console.log("register 테스트 - 빈 URL 입력시 에러 발생");
    try {
        shortener.register("");
        assert.fail()
    } catch (e) {
        assert.strictEqual(e, "EMPTY URL")
    }
})();

(() => {
    console.log("register 테스트 - 정상 URL 입력시 해시 값 반환");
    const hash = shortener.register("http://www.reimaginer.me");
    assert.strictEqual(true, !!hash)
})();

(() => {
    console.log("register 테스트 - 이미 등록한 URL 입력시 기존 해시 값 반환");
    const hash1 = shortener.register("http://www.reimaginer.me/12");
    const hash2 = shortener.register("http://www.reimaginer.me/12");
    assert.strictEqual(hash1, hash2)
})();


(() => {
    console.log("register 테스트 - 미 등록된 url의 해시 입력시 에러");
    try {
        shortener.redirect("http://www.reimaginer.me/112");
        assert.fail()
    } catch (e) {
        assert.strictEqual(e, "NOT REGISTER URL")
    }
})();

(() => {
    console.log("register 테스트 - 등록된 url의 해시 입력시 호출 카운트 및 url 반환");
    const hash = shortener.register("http://www.reimaginer.me/123");

    const url = shortener.redirect(hash);

    let statRepository = require('../urlStatRepository');
    assert.strictEqual(url, "http://www.reimaginer.me/123");
    assert.strictEqual(1, statRepository.findByHash(hash).length);

})();
