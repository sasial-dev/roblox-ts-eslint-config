import { pluginUnicorn } from "../plugins";
import type { FlatConfigItem } from "../types";

export async function unicorn(): Promise<Array<FlatConfigItem>> {
	return [
		{
			name: "style:unicorn",
			plugins: {
				unicorn: pluginUnicorn,
			},
			rules: {
				// The auto-fix here does not support roblox-ts well, but the rules are
				// still useful
				"unicorn/catch-error-name": [
					"error",
					{
						name: "err",
					},
				],
				"unicorn/consistent-destructuring": "error",
				"unicorn/consistent-function-scoping": ["error", { checkArrowFunctions: false }],
				"unicorn/filename-case": [
					"error",
					{
						case: "kebabCase",
						ignore: ["README.md"],
					},
				],
				"unicorn/no-array-for-each": "error",
				"unicorn/no-array-push-push": "error",
				"unicorn/no-await-expression-member": "error",
				"unicorn/no-for-loop": "error",
				"unicorn/no-keyword-prefix": "error",
				"unicorn/no-lonely-if": "error",
				"unicorn/no-negated-condition": "off",
				"unicorn/no-nested-ternary": "error",
				"unicorn/no-object-as-default-parameter": "error",
				"unicorn/no-static-only-class": "error",
				"unicorn/no-unreadable-array-destructuring": "error",
				"unicorn/no-unused-properties": "error",
				"unicorn/no-useless-promise-resolve-reject": "error",
				"unicorn/no-useless-spread": "error",
				"unicorn/no-useless-undefined": ["error", { checkArguments: false }],
				"unicorn/number-literal-case": "error",
				"unicorn/prefer-default-parameters": "error",
				"unicorn/prefer-export-from": "error",
				"unicorn/prefer-includes": "error",
				"unicorn/prefer-logical-operator-over-ternary": "error",
				"unicorn/prefer-optional-catch-binding": "error",
				"unicorn/prefer-set-has": "error",
				"unicorn/prefer-switch": "error",
				"unicorn/prefer-ternary": ["error", "only-single-line"],
				"unicorn/prevent-abbreviations": [
					"error",
					{
						replacements: {
							args: false,
							dist: {
								distance: true,
							},
							e: {
								err: true,
								error: false,
							},
							err: false,
							fn: {
								func: true,
								function: false,
							},
							func: false,
							inst: {
								instance: true,
							},
							nums: {
								numbers: true,
							},
							pos: {
								position: true,
							},
							props: false,
							ref: false,
							refs: false,
							str: false,
						},
					},
				],
				"unicorn/switch-case-braces": "error",
			},
		},
	];
}
