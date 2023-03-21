# 🌪️ Storm

Send HTTP requests to a given URL with a specified number of attacks and requests.

Usage: kitsec storm [OPTIONS] URL

Sends HTTP requests to a given URL with a specified number of threats and requests.

Arguments:

URL: The URL to send HTTP requests to.
Options:

-a, --num-attacks INT: Number of parallel attacks to send requests from. Default: 6.
-r, --num-requests INT: Number of requests to send from each threat. Default: 200.
-y, --num-retries INT: Number of times to retry failed requests. Default: 4.
-p, --pause-before-retry INT: Number of milliseconds to wait before retrying a failed request. Default: 3000.
--help: Show this message and exit.
Example:

```py
kitsec storm https://example.com/
```

Note that the number of attacks and requests can be customized based on the desired testing scenarios. However, sending too many requests to a website without permission may be considered an attack and may be illegal. Make sure to use this tool responsibly and with the proper permissions.