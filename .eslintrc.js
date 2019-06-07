module.exports = {
	env: {
		browser: true, // 브라우져
		es6: true,
		node: true // 백엔드
	},
	extends: [ 'eslint:recommended', 'plugin:prettier/recommended' ],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		'no-console': 'off'
	}
};
