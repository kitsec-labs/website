## Installation

To use Kitsec with Docker: 

- Download docker : https://docs.docker.com/get-docker/

- Pull the image from Docker Hub:

```py
docker pull idrisschebak/kitsec
```

## Usage

To run Kitsec within a Docker container, use the following command:

```py
docker run -it idrisschebak/kitsec kitsec <command> <options>
```

Replace `<command>` with the specific command you want to run, and `<options>` with any additional options or arguments you want to pass to the command.

For example, to run the `CVE` command and specify a log level of 2, you would use:


Replace `<command>` with the specific command you want to run, and `<options>` with any additional options or arguments you want to pass to the command.

For example, to run the `CVE` command and specify a log level of 2, you would use:

```py
docker run -it idrisschebak/kitsec kitsec cidr github.com
```

Refer to the documentation or use `kitsec help` for more information on the available commands and their usage.
