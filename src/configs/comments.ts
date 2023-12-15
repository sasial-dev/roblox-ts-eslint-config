import { pluginComments } from "../plugins";
import type { FlatConfigItem } from "../types";

export async function comments(): Promise<Array<FlatConfigItem>> {
	return [
		{
			name: "style:eslint-comments",
			plugins: {
				"eslint-comments": pluginComments,
			},
			rules: {
				"eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
				"eslint-comments/no-aggregating-enable": "error",
				"eslint-comments/no-duplicate-disable": "error",
				"eslint-comments/no-unlimited-disable": "error",
				"eslint-comments/no-unused-enable": "error",
				"eslint-comments/require-description": "warn",

				"multiline-comment-style": "error",
				"no-inline-comments": "error",
			},
		},
	];
}
