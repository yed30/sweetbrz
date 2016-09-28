
module.exports = function(grunt) {

	// Project Javascript source files
	var 
	JSsourceFiles = [
		'assets/js/sweetbrz.js'
	],
	CCSsourceFiles = [
		'assets/js/sweetbrz.css'
	];
	
	
    grunt.initConfig({
        jshint: {
            all: [JSsourceFiles], 
			options: {
                reporter: 'jslint',
                reporterOutput: './build/logs/jshint.xml',
				ignores: ['assets/js/**/*min.js']
            }
        },
		csslint: {
			options: {
				formatters: [
				  {id: 'lint-xml', dest: './build/logs/csslint.xml'}
				],
				 ignores: ['assets/css/**/*min.css']
            },
			strict: {
				options: {
				  import: 2
				},
				src: [CCSsourceFiles]
			  }
        },
		uglify: {
			build: {
				files: [{
					expand: true,
					src: './assets/js/sweetbrz.js',
					ext: '.min.js'
				}]
			}
		},
		cssmin: {
			target: {
				files: [{
				expand: true,
				src: './assets/css/sweetbrz.css',
				ext: '.min.css'
				}]
			}
		}
    });
	
	// set the grunt force option
	grunt.option("force", true);
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask('checkJS', ['jshint']);
	grunt.registerTask('checkCSS', ['csslint']);
	grunt.registerTask('minify', ['uglify', 'cssmin']);
	  
	grunt.registerTask('check', ['jshint', 'csslint']);
};