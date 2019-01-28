module.exports = {
    comments: false,
    sourceMaps: true,
    presets: [
        '@babel/preset-flow',
        [
            '@babel/env',
            {
                targets: {
                    node: '8.10'
                },
                useBuiltIns: 'usage'
            }
        ]
    ],
    ignore: [
        '/**/*.spec.js',
        '/**/*.test.js',
        '/**/__tests__/*',
        '/**/__mocks__/*',
    ]
};
