module.exports = (base_data) => `{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": [
    "transform-vue-jsx",
    [
      "import",
      {
        "libraryName": "iview",
        "libraryDirectory": "src/components"
      }
    ],
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
`;