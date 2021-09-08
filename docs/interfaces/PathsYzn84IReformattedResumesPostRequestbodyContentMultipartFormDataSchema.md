[@affinda/affinda](../README.md) / [Exports](../modules.md) / PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema

# Interface: PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema

## Table of contents

### Properties

- [file](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#file)
- [fileName](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#filename)
- [identifier](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#identifier)
- [resumeFormat](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#resumeformat)
- [resumeLanguage](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#resumelanguage)
- [url](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#url)
- [wait](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#wait)

## Properties

### file

• `Optional` **file**: `RequestBodyType`

File as binary data blob

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

___

### resumeFormat

• **resumeFormat**: `string`

Identifier of the format used

___

### resumeLanguage

• `Optional` **resumeLanguage**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

___

### url

• `Optional` **url**: `string`

URL to file to download and process

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.