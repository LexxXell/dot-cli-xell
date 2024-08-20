# dot-cli

`dot-cli` is a command-line tool for rendering `doT` templates using JSON data. This tool allows you to easily combine data and templates to generate text files based on your templates.

## Installation

You can install `dot-cli` globally via npm:

```bash
npm install -g dot-cli
```

## Usage

Once installed, you can use the `dot-cli` command to render templates:

```bash
dot-cli --template <template_file> --json <data_file> --output <output_file>
```

- `--template <template_file>`: Path to the `doT` template file.
- `--json <data_file>`: Path to the JSON file containing data.
- `--output <output_file>`: Path where the rendered output will be saved.

### Example

Let's say you have the following template file `template.dot`:

```html
<div>
  <h1>{{=it.title}}</h1>
  <p>{{=it.description}}</p>
</div>
```

And a JSON file `data.json`:

```json
{
  "title": "Welcome to My Site",
  "description": "This is a description of my site."
}
```

You can render the template with the data and save the output to `result.html`:

```bash
dot-cli --template template.dot --json data.json --output result.html
```

This will produce the following output in `result.html`:

```html
<div>
  <h1>Welcome to My Site</h1>
  <p>This is a description of my site.</p>
</div>
```

## License

This project is licensed under the MIT License.

```
This `README.md` provides a clear overview of what the `dot-cli` package does, how to install it, and how to use it with examples.
```