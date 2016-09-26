module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "public/dist/css/main.css": "public/src/less/*.less" // destination file and source file
        }
      }
    },

	uglify: {
	  my_target: {
		files: {
		    "public/dist/js/ng-d3-demo.min.js": ["public/src/js/*.js"],
		}
	  }
  	},

    watch: {
      styles: {
        files: ['public/src/less/*.less','public/src/js/*.js','views/**/*.ejs'], // which files to watch
        tasks: ['less','uglify'],
        options: {
          nospawn: true,
		  livereload: true,
        }
      }
    }
  });

  grunt.registerTask('default', ['less','uglify','watch']);

};
