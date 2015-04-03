module.exports = function(grunt) {
    
    grunt.initConfig({
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['compass', 'cssmin']
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'dist',
                    outputStyle: 'expanded',
                    noLineComments: true
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/humblegs.min.css': 'dist/humblegs.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass', 'cssmin', 'watch']);
    
};