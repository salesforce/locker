'use strict';

const path = require('node:path');

module.exports = {
    overrides: [
        {
            files: ['**/*.*'],
            rules: {
                'import/no-extraneous-dependencies': [
                    'error',
                    // Use package.json from both this package folder and root.
                    { packageDir: [__dirname, path.join(__dirname, '../..')] },
                ],
            },
        },
        {
            files: ['**/*.md/*.*'],
            rules: {
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
};
