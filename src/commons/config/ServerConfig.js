const config = (() => {
    const configLevel = process.env.NODE_ENV || 'production';
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(`./server/${configLevel.trim()}.config`);
})();

if (config === undefined) {
    throw new Error('[ServerConfig.js]Error');
}

export default config;