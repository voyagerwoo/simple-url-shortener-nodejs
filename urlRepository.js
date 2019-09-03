
const map = new Map();
const rMap = new Map();


function findByHash(hash) {
    return map.get(hash);
}

function saveUrl(url, hash) {
    map.set(hash, url);
    rMap.set(url, hash);
}

function findByUrl(url) {
    return rMap.get(url);
}



exports.findByHash = findByHash;
exports.saveUrl = saveUrl;
exports.findByUrl = findByUrl;