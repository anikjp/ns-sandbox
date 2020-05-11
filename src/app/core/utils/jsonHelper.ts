import * as _ from 'lodash';

export class JsonHelper {

    public static tryParse<T>(jsonStr: string): T | null {
        if (_.isObject(jsonStr)) {
            return jsonStr as any as T;
        }
        try {
            return JSON.parse(jsonStr) as T || null;
        } catch (e) {
            return null;
        }
    }

    public static escape(jsonStr: string): string {
        return jsonStr
            .replace(/"/g, '\"')
            .replace(/\\/g, '\\')
            .replace(/\//g, '\/')
            .replace(/\\n/g, '\\n')
            .replace(/\\r/g, '\\r')
            .replace(/\\t/g, '\\t')
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\t/g, '\\t');
    }
}

export { JsonHelper as default };
