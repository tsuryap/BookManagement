module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: ["build", 'temp']
            }
        },
        ngtemplates: {
            common: {
                src: ['app/**/*.html'],
                dest: 'temp/all-templates.js',
                options: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives!
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },
        concat: {
            options: {
                separator: '\n',
            },
            jsFiles: {
                src: [
                    "bower_components/lodash/lodash.js",
                    "bower_components/angular/angular.js",
                    "bower_components/angular-ui-router/release/angular-ui-router.js",
                    "bower_components/angular-messages/angular-messages.js",
                    "app/app.js",
                    "app/**/*.js",
                    "temp/all-templates.js"
                ],
                dest: 'build/<%= pkg.name %>.js',
            },
            cssFiles: {
                src: [
                    "styleSheets/bootstrap.css",
                    "styleSheets/style.css"
                ],
                dest: 'build/<%= pkg.name %>.css'
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    src: ["index.html", "resources/**"],
                    dest: 'build/'
                }]
            }
        },
        watch: {
            css: {
                files: ['sass/*.scss', 'app/**/*.html', "index.html"],
                tasks: ['clean', 'ngtemplates', 'concat', 'copy:build']
            },
            js: {
                files: ['app/**/*.js'],
                tasks: ['clean', 'ngtemplates', 'concat', 'copy:build']
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'styleSheets'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('default', ['clean', 'ngtemplates', 'compass', 'concat', 'copy:build']);
};
