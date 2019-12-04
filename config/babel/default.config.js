module.exports = {
    comments: false,
    sourceMaps: false,
    presets: [
        [
            require.resolve('@babel/preset-env'),
            {
                targets: process.env.BABEL_TARGET !== 'browserslist' ? {
                    node: process.env.BABEL_TARGET || 'current',
                } : { },
                useBuiltIns: 'usage',
                corejs: parseInt(process.env.CORE_JS_VERSION) || 3,
            },
        ],
        require.resolve('@babel/preset-flow'),
        require.resolve('@babel/preset-typescript'),
    ],
    ignore: [
        '/**/*.spec.js',
        '/**/*.test.js',
        '/**/__tests__/*',
        '/**/__mocks__/*',
    ],
};
