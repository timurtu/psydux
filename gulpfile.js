/**
 * Created by timur on 9/1/16.
 */

const path = require('path')
const gulp = require('gulp')
const babel = require('gulp-babel')
const Promise = require('bluebird')
const rimrafAsync = Promise.promisify(require('rimraf'))


const paths = {
  src: path.resolve('src'),
  dist: path.resolve('dist')
}

gulp.task('clean', () => rimrafAsync(paths.dist))

gulp.task('build', ['clean'], () => gulp.src(path.join(paths.src, '**/*.js'))
  .pipe(babel())
  .pipe(gulp.dest(paths.dist))
)

gulp.task('watch', ['build'], () => gulp.watch(path.join(paths.src, '**/*'), ['build']))
