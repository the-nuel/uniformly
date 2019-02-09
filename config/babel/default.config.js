module.exports = {
    comments: false,
    sourceMaps: true,
    presets: [
        require.resolve('@babel/preset-flow'),
        [
            require.resolve('@babel/preset-env'),
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
