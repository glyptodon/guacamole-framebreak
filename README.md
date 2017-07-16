guacamole-framebreak
====================

guacamole-framebreak is an extension for [Apache
Guacamole](http://guacamole.incubator.apache.org/) which adds [frame-breaking
JavaScript](https://en.wikipedia.org/wiki/Framekiller) as a defense against
[clickjacking attacks](https://www.owasp.org/index.php/Clickjacking).

Whether embedding Guacamole within a frame should be allowed is always a detail
to be addressed by the administratr deploying Guacamole, and this extension is
only one method of defending against clickjacking should embedding be
disallowed. Reverse proxies can also be configured to advise browsers that
embedding the application in a frame should be disallowed (or to advise
browsers of the circumstances where it should be allowed) by adding the
`X-Frame-Options` and `Content-Security-Policy` HTTP headers.

