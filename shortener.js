const urlRepository = require('./urlRepository');
const urlStatRepository = require('./urlStatRepository');
const hashGenerator = require('./hashGenerator');

// 등록 기능
exports.register = (url) => {
    if (!url) throw "EMPTY URL";
    const hash = urlRepository.findByUrl(url);
    if (hash) 
        return hash;
    
    const newHash = hashGenerator.generate(url);
    urlRepository.saveUrl(url, newHash);
    return newHash;
};

// 리다이렉트 기능
exports.redirect = (hash) => {
    let url = urlRepository.findByHash(hash);
    if (!url)
        throw 'NOT REGISTER URL';

    urlStatRepository.saveCallStat(hash);
    return url;
};

// 통계 기능
exports.stats = (hash) => {
    return urlStatRepository.findByHash(hash);
};
