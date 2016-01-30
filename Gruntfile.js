module.exports = function(grunt) {
	console.log('Starts Grunt'); 
	// Task configuration will go here
	grunt.initConfig({
		// Express task config 
		express: {
			dev: {
			  options: {
			    script: 'program.js'
			  }
			}
		}, 
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
		}, 
		// Watch task config
		watch: {
			options: { livereload: 35729 }, 
			sass: {
				files: "site/sass/*.scss",
				tasks: ['sass'] 
			}, 
			html: {
				files: ['*.html']
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');	
	grunt.loadNpmTasks('grunt-contrib-watch'); 
	grunt.loadNpmTasks('grunt-express-server');	
	grunt.registerTask('default', ['express', 'sass', 'watch']); 
};