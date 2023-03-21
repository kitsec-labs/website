# 🧮 Enumerator

The enumerator feature in Kitsec allows you to enumerate subdomains for a given domain using Subfinder and active enumeration. It also provides additional options to fetch HTTP response for active subdomains and analyze technologies used by subdomains.

To enumerate subdomains for example.com, you can use the following command:


```py
kitsec enumerator -r -t example.com
```

The -r option tells Kitsec to fetch HTTP response for active subdomains. The -t option tells Kitsec to analyze technologies used by subdomains. The -a option tells Kitsec to perform active enumeration.

The output will display the subdomains, their status codes, the reason for the status (if applicable), and the technologies used by the subdomains (if applicable). The output for the above command will be:

```
Subdomain                       Status  Reason               Technology
----------------------------  --------  -------------------  ----------------------------------------------------------------
tracking.webapp.domain1.com        503  Service Unavailable  []
legal.domain1.com                  404  Not Found            ['Strikingly', 'Lua', 'jQuery', 'Nginx', 'OpenResty']
help.domain1.com                   403  Forbidden            ['Cloudflare']
staging-api.domain1.com            401  Unauthorized         []
api.domain1.com                    401  Unauthorized         []
staging-app.domain1.com            200  OK                   ['Nginx', 'Google Font API', 'React', 'Stripe']
staging-website.domain1.com        200  OK                   ['Nginx', 'Google Font API', 'React', 'Stripe']
sales.domain1.com                  200  OK                   ['Nginx', 'Google Font API', 'React', 'Stripe']
```
