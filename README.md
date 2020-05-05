# tts-save-files

TypeScript Definitions and JSON Schema for Tabletop Simulator's
[Save file format][1].

[1]: https://kb.tabletopsimulator.com/custom-content/save-file-format/

This package contains hand written [JSON Schema Draft-07][2] files for the
serialized objects in the [Save file format][1], and automatically generated
[TypeScript definition files][3] using [`json-schema-to-typescript`][4].

You could use this package to more confindently parse and edit these large
JSON blobs using Visual Studio Code, or via the command-line with a tool such
as [`ajv-cli`][5]. To add support in Visual Studio Code, you can add the
following to your [`settings.json`][6]:

```json
{
  "json.schemas": [
    {
      "fileMatch": ["path/to/save-file.json"],
      "url": "https://tts.swlegion.dev/SaveState.json"
    }
  ]
}
```

[2]: http://json-schema.org/draft-07/schema
[3]: https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
[4]: https://www.npmjs.com/package/json-schema-to-typescript
[5]: https://www.npmjs.com/package/ajv-cli
[6]: https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings
