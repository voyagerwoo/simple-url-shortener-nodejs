const map = new Map();

exports.findByHash = function findByHash(hash) {
    return map.get(hash) || [];
};

exports.saveCallStat = function saveCallStat(hash) {
    const stats =  map.get(hash) || [];
    stats.push({time: new Date().getTime()})
    map.set(hash, stats)
};
