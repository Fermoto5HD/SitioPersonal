module.exports = function(grunt) {
	console.log('Starts Grunt'); 
	// Task configuration will go here
	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'site/sass', 
					src: ['*.scss'],
					dest: 'site/css', 
					ext: '.css'
				}]
			}
		}, 
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/', 
					src: ['**/*.{png,jpg,ico}'],
					dest: 'site/img/'
				}], 
				options: { cache: false }, 
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');	
	grunt.registerTask('default', ['sass']); 
};