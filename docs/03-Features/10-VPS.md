# 🧢 VPS

Connects to a remote VPS server and tails the auth.log file.

Usage: kitsec vps-logger [OPTIONS]

Prompts:

-h, --host TEXT: The IP address of the VPS server to connect to.
-u, --username TEXT: The limited user account to use for connecting to the VPS server.
-p, --password TEXT: The password for the user account.
--help: Show this message and exit.
Returns:

Prints a continuous stream of output from the auth.log file to the console.
The program attempts to connect to the specified VPS server using SSH, with the provided username and password. Once connected, it invokes a shell and sends the command to tail the auth.log file using sudo. It then continuously checks for new output from the file and prints it to the console as it is received.

Example:

```py
kitsec vps-logger -h <IP address> -u <username> -p <password>
```

Note that the tool requires SSH access to the remote VPS server and the necessary permissions to run the sudo tail command. 
Make sure to use this tool responsibly and with the proper permissions.