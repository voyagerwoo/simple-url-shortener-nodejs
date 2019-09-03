const urlRepository = require('./urlRepository');
const urlStatRepository = require('./urlStatRepository');
const hashGenerator = require('./hashGenerator');

// 등록 기능
function register(url) {
    if (!url) throw "EMPTY URL";
    const hash = urlRepository.findByUrl(url);
    if (hash) 
        return hash;
    
    const newHash = hashGenerator.generate(url);
    urlRepository.saveUrl(url, hash);
    return newHash;
}

// 리다이렉트 기능
function redirect(hash) {
    urlStatRepository.saveCallStat(hash);
    return urlRepository.findByHash(hash);
}

// 통계 기능
function stats(hash) {
    return urlStatRepository.findByHash(hash);
}

exports.register = register;
exports.redirect = redirect;
exports.stats = stats;
