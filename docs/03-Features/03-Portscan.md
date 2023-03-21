# 📡 Port Scan

Scan for all or most common open ports on example.com:

Usage: kitsec portscan [OPTIONS] HOSTNAME

Performs a TCP port scan on a specified hostname and a range of ports.

Arguments:
HOSTNAME The hostname or URL of the target host.

Options:
-c, --common-ports Scan only the most common HTTP ports (80, 8080, and 443).
--help Show this message and exit.

Example:

```bash
kitsec portscan -c example.com 
```

Output:

```
Open Ports:
example.com:80
example.com:443
Note that the -c option scans only the most common HTTP ports (80, 8080, and 443), 
but you can scan other ports by omitting this option. Also, the output may vary 
depending on the open ports found on the target host.
```