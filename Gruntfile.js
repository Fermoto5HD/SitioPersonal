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
		// SASS task config
		// sass: {
		// 	dist: {
		// 		options: {
		// 			style: 'expanded' 
		// 		}, 
		// 		files: {
		// 			// destination              // source file
		// 			"site/css/contacto.css" : "site/sass/contacto.scss", 
		// 			"site/css/cover.css" : "site/sass/cover.scss", 
		// 			"site/css/fonts.css" : "site/sass/fonts.scss", 
		// 			"site/css/general.css" : "site/sass/general.scss", 
		// 			"site/css/header.css" : "site/sass/header.scss", 
		// 			"site/css/inicio.css" : "site/sass/inicio.scss", 
		// 		}
		// 	}
		// }, 
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
	grunt.loadNpmTasks('grunt-contrib-watch'); 
	grunt.loadNpmTasks('grunt-express-server');	
	grunt.registerTask('default', ['express', 'sass', 'watch']); 
};