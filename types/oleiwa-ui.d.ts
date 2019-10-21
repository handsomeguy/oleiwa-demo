import Vue, { PluginObject } from 'vue'

import { helloworld } from './helloworld'

export function install (vue: typeof Vue, options: InstallationOptions): void

export interface InstallationOptions {
    locale: any,
    i18n: any,
    size: string
}

export {
    helloworld
}