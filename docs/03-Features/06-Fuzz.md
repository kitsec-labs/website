# 🌫️ Fuzz

Sends HTTP GET requests to a specified base URL with a given list of paths.

Usage: kitsec fuzz [OPTIONS] BASE_URL

Arguments:

BASE_URL (str): The base URL to send requests to. The URL must include the protocol (http or https).
Options:

--file-fuzz (bool): Whether to use file format fuzzing or not.
--path-fuzz (bool): Whether to use path fuzzing or not.
--help: Show this message and exit.

Example:

```py
kitsec fuzz example.com
```


Note that the tool sends GET requests to the specified base URL with a list of paths. By default, it uses both file format fuzzing and path fuzzing. You can enable or disable either type of fuzzing by specifying the corresponding option. However, it's essential to use this tool responsibly and with the proper permissions. Sending too many requests to a website without permission may be considered an attack and may be illegal.