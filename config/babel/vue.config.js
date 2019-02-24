module.exports = {
    comments: false,
    sourceMaps: false,
    presets: [
        [
            require.resolve('babel-preset-vue'),
            {
                flow: true,
                absoluteRuntime: false,
            },
        ],
    ],
    ignore: [
        '/**/*.spec.js',
        '/**/*.test.js',
        '/**/__tests__/*',
        '/**/__mocks__/*',
        '/**/__fixtures__/*',
        '/**/*.stories.js',
    ],
};
