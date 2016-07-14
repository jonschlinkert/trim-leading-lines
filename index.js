'use strict';

module.exports = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  var lines = str.split('\n');
  var idx = 0;
  while (/^\s+$/.test(lines[idx]) || !lines[idx]) {
    idx++;
  }
  return lines.slice(idx).join('\n');
};
