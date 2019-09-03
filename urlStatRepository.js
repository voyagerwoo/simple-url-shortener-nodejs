const map = new Map();

exports.findLogByHash = function(hash) {
    return (map.get(hash) || [])
};

exports.findByHash = function(hash) {
    return (map.get(hash) || [])
        .map(time => getHour(time))
        .reduce((acc, hour) => {
            acc[hour] = (acc[hour] || 0) + 1;
            return acc
        }, {})
};

exports.saveCallStat = function(hash) {
    const stats = map.get(hash) || [];
    stats.push(new Date());
    map.set(hash, stats)
};

function getHour(time) {
    return time.toISOString().replace(/T/, ' ').replace(/\..+/, '').split(':')[0] + ":00:00";
}
