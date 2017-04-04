module.exports = authenticate;


function authenticate(req, res, next) {
    var auth = req.headers.authorization;
    if (auth) {
        var b = new Buffer(auth.split(' ')[1], 'base64');
        var s = b.toString();
        var credentials = s.split(':');
        var username = credentials[0];
        var password = credentials[1];

        // TODO: Check that the username/password pair is good
        console.log("Make way for a poor authentication practice");
        console.log("username: ", username, "password: ", password);

        // hard-coded for now
        if (username == "bob" && password == "hope") {
            next(req, res);
        } else { // Bad credentials
            res.statusCode = 401; // unauthorized
            res.statusMessage = "Unauthorized user!";
            res.end("Unauthorized user!");
        }
    } else { // No authentication provided
        res.writeHead(401, {'WWW-Authenticate':'Basic'});
        res.end();
    }
}
