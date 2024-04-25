import { NodePath, Visitor } from "@babel/traverse";
import * as BabelTypes from "@babel/types";
export interface PluginOptions {
    opts?: {
        target?: string;
        runtime?: string;
    };
    file: {
        path: NodePath;
    };
}
export interface Babel {
    types: typeof BabelTypes;
}
export default function evomasterPlugin(babel: Babel): {
    visitor: Visitor<PluginOptions>;
};
