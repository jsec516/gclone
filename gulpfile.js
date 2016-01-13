var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');

var PATHS = {
    src: {
        js: 'src/**/*.ts',
        html: 'src/**/*.html',
        assets: 'src/assets/**'
    },
    lib: [
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/angular2/bundles/http.dev.js'
        /*
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.src.js',
        'node_modules/systemjs/lib/extension-cjs.js',
        'node_modules/systemjs/lib/extension-register.js',
        'node_modules/angular2/node_modules/zone.js/zone.js',
        'node_modules/angular2/node_modules/zone.js/long-stack-trace-zone.js',
        'node_modules/angular2/node_modules/rx/dist/rx.all.js',
        'node_modules/axios/dist/axios.js',
        'node_modules/axios/dist/axios.map',
        'node_modules/moment/moment.js'*/
    ]
};

gulp.task('clean', function (done) {
    var del = require('del');
    del(['client'], done);
});

gulp.task('ts2js', function () {
    var typescript = require('gulp-typescript');
    var tscConfig = require('./tsconfig.json');

    var tsResult = gulp
        .src(PATHS.src.js)
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest('client'));
});

gulp.task('html', function () {
    return gulp.src(PATHS.src.html).pipe(gulp.dest('client'));
});

gulp.task('assets', function () {
    return gulp.src(PATHS.src.assets).pipe(gulp.dest('client/assets'));
});

gulp.task('angular2', function(){
   console.log("work started");
   return gulp.src([
      'node_modules/angular2/es6/prod/*.js',
      'node_modules/angular2/es6/prod/src/**/*.js'],
    {base: 'node_modules/angular2/es6/prod'})
    .pipe(rename(function(path) {
      console.log(path);
      path.dirname = 'angular2/' + path.dirname;
      path.extname = '';
    }))
    .pipe(traceur({modules: 'instantiate', moduleName: true}))
    .pipe(concat('angular2.js'))
    .pipe(gulp.dest('client/assets/lib')); 
});

gulp.task('play', ['clean', 'ts2js', 'html', 'assets'], function () {
    console.log("dist is ready");
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    // var open = require('open');

    var port = 9000, app;

    // gulp.watch(PATHS.src, ['ts2js']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        console.log('server is ready at http://localhost:',port);
        // open('http://localhost:' + port);
    });
});
