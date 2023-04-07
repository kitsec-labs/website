# 📜 Certificate

Search for SSL/TLS for the specified host and port:

Usage: kitsec certificate [OPTIONS] HOSTNAME

Check the SSL/TLS certificate for the specified host and port.

Arguments:

HOSTNAME: The hostname to check the certificate for.
Options:

-p, --port INTEGER: The port to connect to. Default is 443.
--help: Show this message and exit.
Returns:

None. Displays the certificate information to the console.
Example:

```py
kitsec certificate github.com
```

Output:

```yaml
Hostname: github.com
Not Before: 2023-02-14 00:00:00
Not After: 2024-03-14 23:59:59
```

Note that the output may vary depending on the SSL/TLS certificate of the host and port. The tool retrieves the certificate information and displays the hostname, not before date, and not after date for the certificate.