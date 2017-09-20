module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: ['**/*.js'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['**/*.css'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};