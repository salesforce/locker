'use strict';

const fs = require('fs-extra');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { rollupConfig } = require('scripts/rollup/configs/next.cjs');

const packageJSON = fs.readJSONSync('package.json');

module.exports = rollupConfig({
    external: [/node_modules/, ...Object.keys(packageJSON.dependencies)],
    output: {
        exports: 'default',
    },
    plugins: [
        nodeResolve({
            dedupe: () => true,
            preferBuiltins: true,
        })
    ],
});
