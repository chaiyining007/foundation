module.exports = (base_data) => `{
  "presets": [
      "es2015",
      "stage-0"
  ],
  "plugins": [
      [
          "import",
          {
              "libraryName": "iview",
              "libraryDirectory": "src/components"
          }
      ],
      "transform-runtime"
  ]
}
`;