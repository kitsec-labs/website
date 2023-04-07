# 🪄 Convert

The Convert feature in kitsec applies a specified decoding or hashing function to input data. The supported functions include:

URL
HTML
Base64
ASCII
Hex
Octal
Binary
GZIP

To use the Convert feature in kitsec, run the following command:

```py
kitsec convert [FUNCTION] [INPUT_DATA]
```

To convert a Base64-encoded string to plain text, run:

```py
kitsec convert S2l0c2VjIFJvY2tzIQ== -t Base64
```

This will output the following plain text:

```py
Kitsec Rocks!
```

Note that some functions may require additional options or parameters. To see the available options and usage instructions for a specific function, run:

```py
kitsec convert [FUNCTION] --help
```