guacamole-framebreak
====================

guacamole-framebreak is an extension for [Apache
Guacamole](http://guacamole.incubator.apache.org/) which adds [frame-breaking
JavaScript](https://en.wikipedia.org/wiki/Framekiller) as a defense against
[clickjacking attacks](https://www.owasp.org/index.php/Clickjacking).

Whether embedding Guacamole within a frame should be allowed is always a detail
to be addressed by the administrator deploying Guacamole, and this extension is
only one method of defending against clickjacking should embedding be
disallowed (or conditionally allowed). Reverse proxies can also be configured
to advise browsers that embedding the application in a frame should be
disallowed (or to advise browsers of the circumstances where it should be
allowed) by adding the `X-Frame-Options` and `Content-Security-Policy` HTTP
headers.

Building the extension
----------------------

guacamole-framebreak is built using [Apache Maven](http://maven.apache.org).
Building guacamole-framebreak should be as simple as running a single command
within the root of the source tree:

    $ mvn package

The extension `.jar` file can then be found within the `target/` subdirectory,
which Maven will have automatically created if it didn't exist.

Installation
------------

To install guacamole-framebreak, the extension `.jar` file must be copied to
the `extensions/` subdirectory of
[`GUACAMOLE_HOME`](http://guacamole.incubator.apache.org/doc/gug/configuring-guacamole.html#guacamole-home). There are no properties which must be set within
`guacamole.properties` - simply copying the extension `.jar` in place and
restarting Tomcat is sufficient.

