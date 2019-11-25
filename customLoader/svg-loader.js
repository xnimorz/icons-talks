const fs = require("fs");
const { getOptions } = require("loader-utils");

module.exports = function(source) {
  if (this.cacheable) {
    this.cacheable();
  }
  const options = getOptions(this);
  const template = fs.readFileSync(options.template, "utf8");

  return template.replace("<icon />", source);
};
