import resolve from 'rollup-plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import commonjs from 'rollup-plugin-commonjs'  //支持对commonj模块的加载
import vue from 'rollup-plugin-vue' // 处理vue文件
import json from 'rollup-plugin-json'; // 处理package.json
import babel from 'rollup-plugin-babel';
// ugilfy不支持es转换 采用terser
import { terser } from "rollup-plugin-terser";

const outputFormat = process.env.format || 'es';
const minify = process.env.minify || false;
const fileSuffix = minify ? ".min" : "";

export default {
    input: './src/index.js',
    // input: './test.js',
    output: {
      file: `dist/oleiwa.${outputFormat}${fileSuffix}.js`,
      format: outputFormat,
      name:"oleiwa"
    },
    plugins: [
        resolve({ extensions: ['.vue'] }),
        commonjs(),
        vue(),
        json(),
        // 避免获取外部的.babelrc文件
        babel({
            babelrc: false,
            presets: [['env', { modules: false }]],
        }),
        process.env.minify && terser()
    ]
};