# strapi-plugin-international-fields

<a href="https://www.npmjs.org/package/strapi-plugin-international-fields">
    <img src="https://img.shields.io/npm/v/strapi-plugin-international-fields" alt="NPM Version" />
</a>
<a href="https://www.npmjs.org/package/strapi-plugin-international-fields">
    <img src="https://img.shields.io/npm/dm/strapi-plugin-international-fields.svg" alt="Monthly download on NPM" />
</a>

This plugin adds custom fields to your [Strapi](https://github.com/strapi/strapi) application:

* Country
* Language
* Nationality

**Supported Strapi versions:**
 
* v3.5 (and higher)

_Older versions may work but are not supported._

## Installation

**Add package**
```bash
# using yarn
yarn add strapi-plugin-international-fields

# using npm
npm install strapi-plugin-international-fields --save
```

**Rebuild Admin Panel**
```bash
# using yarn
yarn build --clean

# using npm
npm run build --clean
```

## Usage

You can't add custom fields through the _Content-Types Builder_ with Strapi yet, so you'll need to add it manually. To add the custom field to any content type you need to add it to the `attributes` in the models settings file `api/*/models/*.settings.json` like the example below. 

```diff
{
  "attributes": {
    "country": {
-      "type": "string",
+      "type": "country",
+      "columnType": "text"
    }
  }
}
```

### Support
- [Strapi community on Slack](http://slack.strapi.io), feel free to DM me (@MattieBelt).
- [GitHub issues](https://github.com/MattieBelt/strapi-plugin-international-fields/issues) for bugs 🐛, contributions 🔧 or just anything to discuss 💬.

### Resources
- [Strapi website](http://strapi.io/)
- [Strapi forum](https://forum.strapi.io/)
- [Strapi news on Twitter](https://twitter.com/strapijs)

### License
- Copyright (c) 2020-2021 Mattias van den Belt & Strapi Solutions ([MIT License](LICENSE.md)).
