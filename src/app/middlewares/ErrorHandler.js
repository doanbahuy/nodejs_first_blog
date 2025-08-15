module.exports = function errorHandler(err, req, res, next) {
    console.error(err.stack);
    return res.status(500).json({
        error: true,
        message: 'Có lỗi xảy ra, vui lòng thử lại sau',
        debug: process.env.NODE_ENV === 'development' ? err.message : null
        
    });
}