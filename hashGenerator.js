function generate(url) {
    if (!url)
        throw "EMPTY URL";

    const nowTime = new Date().getTime()
    return Buffer.from(`${~~(Math.random() * 1000)}|${nowTime}|${~~(Math.random() * 1000)}`)
        .toString('base64');

}

exports.generate = generate;
