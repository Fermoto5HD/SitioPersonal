module.exports = {
	navigateFallback: '/index.html',
	stripPrefix: '_dist',
	root: '_dist/',
	staticFileGlobs: [
		'_dist/index.html',
		'_dist/**.js',
		'_dist/**.css',
		'_dist/assets/**',
		'_dist/assets/js/**.js',
		'_dist/assets/css/**.css',
		'_dist/index.html',
		'_dist/static/**',
	]
};