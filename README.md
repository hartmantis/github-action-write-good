# Write Good GitHub Action

<p align="left">
  <a href="https://github.com/roboticcheese/github-action-write-good/actions"><img alt="Tests Status" src="https://github.com/roboticcheese/github-action-write-good/workflows/Tests/badge.svg"></a>
</p>

This action runs the `write-good` linter for English prose.

*Disclaimer: This is my first GitHub action and first time writing JavaScript in ~5 years. In other words, I have no idea what I'm doing, but hopefully this works.*

## Inputs

### `path`

***Required*** The path to the file(s) to lint. Default: `**/*.md`.

## Example usage

```
uses: roboticcheese/github-action-write-good@v1
with:
    path: README.md
```
