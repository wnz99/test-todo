function css() {
  return '';
}

css.global = function(style) {
  return style;
};

css.resolve = function(style) {
  return style;
};

module.exports = css;
module.exports.global = css.global;
module.exports.resolve = css.resolve;
