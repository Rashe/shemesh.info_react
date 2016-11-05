module.exports = function (grunt) {

    grunt.initConfig({
        jsDistDir: 'public/production/',
        cssDistDir: 'public/css/',
        sassDir: 'sass/',
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    '<%=cssDistDir%>app.css': '<%=sassDir%>materialize.scss'
                }
            }
        },
        watch: {
            files: ['<%=sassDir%>*.scss'
                ],
            tasks: ['sass',
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'sass',
        'watch'
    ]);

};