const map = new Map();
const rMap = new Map();

exports.findByHash = (hash) => {
    return map.get(hash);
};

exports.saveUrl = (url, hash) => {
    map.set(hash, url);
    rMap.set(url, hash);
};
exports.findByUrl = (url) => {
    return rMap.get(url);
};