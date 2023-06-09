Installation
To use Kitsec, you need to have Python 3 and Go installed on your system. Once you have these dependencies installed, you can install Kitsec by running the following command:


```py
pip install kitsec
```

- Install go : https://golang.org/doc/install

- Install go dependencies:

```go
go install -v github.com/OWASP/Amass/v3/...@master
go install github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest
```

This will install the required Go packages and tools.

Usage
To run Kitsec, you can use the following command:

```py
kitsec <command> <options>
```

Replace `<command>` with the specific command you want to run, and `<options>` with any additional options or arguments you want to pass to the command.

For example, to run the Convert command, you would use:

```py
kitsec convert <options>
```

Refer to the documentation or use kitsec help for more information on the available commands and their usage.