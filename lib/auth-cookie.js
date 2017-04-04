module.exports = auth;


function auth(req, res, next) {
    console.log("cookie: ", req.headers.cookie);
    res.setHeader(
        'Set-Cookie',
        [ /* there are three cookies here */
            "quote=cookies%20are%20for%20me;",
            "sessionid=212;Expires=Wed, 09, Jun 2021 10:18:14 GMT",
            "safe=value;HttpOnly" /* can only be sent and set through HTTP requests (i.e. not through JS) */
        ]
    );

    next(req, res);
}
