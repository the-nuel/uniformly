module.exports = {
    comments: false,
    sourceMaps: false,
    presets: [
        require.resolve('@babel/preset-flow'),
        require.resolve('@babel/preset-typescript'),
        [
            require.resolve('@babel/preset-env'),
            {
                targets: {
                    node: process.env.BABEL_NODE_TARGET,
                },
                useBuiltIns: 'usage',
                corejs: 2,
            },
        ],
    ],
    ignore: [
        '/**/*.spec.js',
        '/**/*.test.js',
        '/**/__tests__/*',
        '/**/__mocks__/*',
    ],
};
