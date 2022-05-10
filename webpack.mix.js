const mix = require('laravel-mix');
const { resolve } = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/scripts/main.js', 'public/build')
    .sass('resources/styles/main.scss', 'public/build')
    .browserSync({
        proxy: 'localhost',
        files: [
            'public/**/*',
            'resources/**/*/.twig',
            'resources/**/*/.php',
        ],
    });
mix.alias({'uikit-util': resolve(__dirname, 'node_modules/uikit/src/js/util')});