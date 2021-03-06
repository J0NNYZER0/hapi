import { InjectionToken } from "@rxdi/core";
import { PluginNameVersion, PluginBase, PluginPackage, ServerOptions, ServerRoute } from 'hapi';

export class HapiConfigModel  {
    randomPort?: boolean;
    staticConfig?: ServerRoute | ServerRoute[] = {
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: 'public',
                index: ['index.html', 'default.html']
            }
        }
    };
    hapi?: ServerOptions;
    plugins?: Array<PluginBase<any> & (PluginNameVersion | PluginPackage)>;

}

export const HAPI_CONFIG = new InjectionToken<HapiConfigModel>('hapi-config-injection-token');
export const HAPI_SERVER = new InjectionToken<any>('hapi-server-injection-token');
export const HAPI_PLUGINS = new InjectionToken<Array<PluginBase<any> & (PluginNameVersion | PluginPackage)>>('hapi-plugins-injection-token');