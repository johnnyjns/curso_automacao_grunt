module.exports = function(grunt){

    grunt.initConfig({

        copy:{

            public:{
                expand: true,
                cwd: 'public',
                src: '**',
                dest: 'dist'
            }
        },

        clean:{

            dist: {
                src: 'dist'
            }
        },

        useminPrepare: {

            html: 'dist/**/*.html'
        },

        usemin: {

            html: 'dist/**/*.html'
        },

        imagemin: {
            public: {
                expand: true,
                cwd: 'dist/img',
                src: '**/*.{png,jpg,gif}',
                dest: 'dist/img'
            }
        }

    });

    grunt.registerTask('minifica', ['useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'imagemin']);
    grunt.registerTask('dist', ['clean','copy']);
    grunt.registerTask('default', ['dist', 'minifica']);

    // carregando tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
}
