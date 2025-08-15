const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
const authRouter = require('./auth');
// const errorHandler = require('../app/middlewares/ErrorHandler');

function route(app){
    
    app.use('/courses', coursesRouter);

    app.use('/me', meRouter);

    app.use('/auth', authRouter);
    
    app.use('/', siteRouter);

    // app.use(errorHandler);
}

module.exports = route;