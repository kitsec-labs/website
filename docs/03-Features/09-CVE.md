# 🌐 CVE

Search for CVEs for the specified product.

Usage: kitsec cve [OPTIONS] PRODUCT_NAME

Retrieves CVE data for a specific product and displays it.

Arguments:

PRODUCT_NAME: The product name (company name) to search for.
Options:

--limit INTEGER: Number of results to display (default=10).
--help: Show this message and exit.
Example:

```py
kitsec cve python -l 2
```

Output:

```py
CVE ID    CVE-2023-26477
CWE       CWE-94: Improper Control of Generation of Code ('Code Injection') (4.10)
Severity  Severity information not available
Summary   XWiki Platform is a generic wiki platform. Starting in versions 6.3-rc-1 and 6.2.4, it's possible to inject arbitrary wiki syntax including Groovy, Python and Velocity script macros via the `newThemeName` request parameter (URL parameter), in combination with additional parameters. This has been patched in the supported versions 13.10.10, 14.9-rc-1, and 14.4.6. As a workaround, it is possible to edit `FlamingoThemesCode.WebHomeSheet` and manually perform the changes from the patch fixing the issue.

CVE ID    CVE-2018-1000802
CWE       CWE-77: Improper Neutralization of Special Elements used in a Command ('Command Injection') (4.10)
Severity  Severity information not available
Summary   Python Software Foundation Python (CPython) version 2.7 contains a CWE-77: Improper Neutralization of Special Elements used in a Command ('Command Injection') vulnerability in shutil module (make_archive function) that can result in Denial of service, Information gain via injection of arbitrary files on the system or entire drive. This attack appear to be exploitable via Passage of unfiltered user input to the function. This vulnerability appears to have been fixed in after commit add531a1e55b0a739b0f42582f1c9747e5649ace.
```
Note that the output may vary depending on the product and the number of CVEs found. The tool retrieves data from the National Vulnerability Database (NVD) and displays the CVE ID, CWE, severity, and summary for each vulnerability.