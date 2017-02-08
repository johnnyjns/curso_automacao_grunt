module.exports = function(grunt){

    grunt.initConfig({

        copy:{

            public:{
                expand: true,
                cwd: 'public',
                src: '**',
                dest: 'www'
            }
        },

        clean:{

            dist: {
                src: 'www'
            }
        }

    });

    grunt.registerTask('dist', ['clean','copy']);
    grunt.registerTask('default', ['dist']);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
}
