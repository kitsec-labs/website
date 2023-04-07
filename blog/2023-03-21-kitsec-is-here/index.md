---
slug: kitsec-is-here
title: Kitsec is here!
authors: [idrisschebak]
---

## Hello World 👋

During these last 5 years, i have been playing as a DJ, studying statistic and data science, and working as a software engineer..
But before that, i was a security researcher and a penetration tester. This led me to chain many (really.. many) bash scripts together to perform security tasks.
It was good, but tedious and time-consuming. So, i decided to create a tool that would help me perform security tasks in a more efficient and organized way.

By now.. You're probably wondering what Kitsec is. Well, Kitsec is a command-line tool that helps you perform various security tasks. 
It's a collection of tools that are used to perform security tasks such as enumeration, fuzzing, and vulnerability scanning. 
It's a tool that helps you perform security tasks in a more efficient and organized way.

You can: 
- Convert: Applies a specified decoding or hashing function to input data. (ie. URL, HTML, Base64, ASCII, Hex, Octal, Binary & GZIP).
- Enumerator: Enumerates subdomains for a given domain using subfinder, amass, assetfinder and findomain and active enumeration.
- Capture: Send a GET request to a specified URL, capture the request headers, extract the hostname, path, and cookies and missing headers.
- Portscan: Scan a host for common or all possible open ports.
- Certificate: Check the SSL/TLS certificate information for a given URL.
- Storm: Sends HTTP requests to a given URL with a specified number of attacks and requests.
- Disturb: Send multiple HTTP requests to the specified URL with the same payload.
- Fuzz: Test your web applications against path fuzzing and file fuzzing.
- CIDR: Looks up the CIDR range for a company's domain name from its RDAP record.
- CVE: Retrieves CVE data for a specific product name (company name) from NIST's National Vulnerability Database (NVD).
- VPS: Login to your VPS with a single command.

To use Kitsec, simply type `kitsec <command>` in your terminal. Here are some examples:

- `kitsec convert S2l0c2VjIFJvY2tzIQ== -t Base64: Decodes a URL.
- `kitsec enumerator -r -t example.com`: Enumerates all subdomains for example.com.
- `kitsec capture --url "https://www.example.com/path" `: Sends a GET request to a specified URL and captures request headers.
- `kitsec portscan example.com `: Scans all possible open ports for example.com.
- `kitsec certificate "https://www.example.com"`: Checks the SSL/TLS certificate information for a given URL.
- `kitsec storm  "https://www.example.com" --attacks 100 --requests 5`: Sends 100 HTTP requests to a given URL with 5 requests at a time.
- `kitsec disturb  "https://www.example.com"`: Sends n HTTP requests to the specified URL with the same payload.
- `kitsec fuzz -p -f "https://www.example.com" `: Tests a web application against path and file fuzzing using a specified wordlist.
- `kitsec cidr example.com`: Looks up the CIDR range for github.com.
- `kitsec cve python -l 2: Retrieves CVE data for Python from NIST's National Vulnerability Database (NVD).

We're always working to make Kitsec better, so stay tuned for more features and improvements. If you have any feedback or suggestions, feel free to let us know!

Happy hacking!
