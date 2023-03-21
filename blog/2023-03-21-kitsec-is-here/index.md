---
slug: kitsec-is-here
title: Kitsec is here!
authors: [idrisschebak]
---

## Welcome to Kitsec CLI!

Kitsec is a powerful toolkit designed to help you simplify and centralize your security workflow. Here are some of its main features:

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

- `kitsec convert --type url --value "https://www.example.com"`: Decodes a URL.
- `kitsec enumerator --domain example.com --full`: Enumerates all subdomains for example.com.
- `kitsec capture --url "https://www.example.com" --headers "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"`: Sends a GET request to a specified URL and captures request headers.
- `kitsec portscan --host example.com --all`: Scans all possible open ports for example.com.
- `kitsec certificate --url "https://www.example.com"`: Checks the SSL/TLS certificate information for a given URL.
- `kitsec storm --url "https://www.example.com" --attacks 100 --requests 5`: Sends 100 HTTP requests to a given URL with 5 requests at a time.
- `kitsec disturb --url "https://www.example.com" --payload "Hello world" --requests 10`: Sends 10 HTTP requests to the specified URL with the same payload.
- `kitsec fuzz --url "https://www.example.com" --type path --wordlist /path/to/wordlist.txt`: Tests a web application against path fuzzing using a specified wordlist.
- `kitsec cidr --domain example.com`: Looks up the CIDR range for example.com.
- `kitsec cve --product "Microsoft Windows" --vendor Microsoft`: Retrieves CVE data for Microsoft Windows from NIST's National Vulnerability Database (NVD).
- `kitsec vps --provider linode --username myusername --password mypassword`: Logs in to your Linode VPS with a single command.

We're always working to make Kitsec better, so stay tuned for more features and improvements. If you have any feedback or suggestions, feel free to let us know!

Happy hacking!
