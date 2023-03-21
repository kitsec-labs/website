# 📶  CIDR

Search for CIDR ranges for a given domain name:

Usage: kitsec cidr [OPTIONS] COMPANY_NAME

Look up the CIDR range for a company's domain name.

Arguments:

COMPANY_NAME: The name of the company's domain name to look up.
Options:

--help: Show this message and exit.
Returns:

The CIDR range for the company's domain name as a string.
If an exception is raised during the lookup process, an error message will be displayed.
Example:

```py
kitsec cidr github.com
```

Output:

```
The CIDR range for github.com is 192.30.252.0/22
Note that the CIDR range may differ based on the domain name and the company's network infrastructure.
```