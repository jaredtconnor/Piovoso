### Minimal typography blog theme
This is meant to be a minimalist blog theme

The `config.toml` should be setup as follows:
```
title = "title"
pygmentsCodeFences = true
pygmentsUseClasses = true

[params]
  description = "description"
  avatar = "img/url"
  favicon = "img/url"

[menu]
  [[menu.navigation]]
    name = 'link'
    url = 'link'
```
## How to install
1. On your website's root directory, run `git submodule add https://github.com/jaredtconnor/piovoso`
2. In your `config.toml`, change the theme property to `theme = "piovoso"`

## How to add items in nav
Paste this to your `config.toml` and adjust accordingly.
