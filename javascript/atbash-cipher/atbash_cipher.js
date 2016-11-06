module.exports = {
  encode: encode
};

function encode(text) {
  var formatted = text.replace(/\s|\.|,/g, "").toLowerCase();
  var result = "";
  formatted.split("").forEach(function (letter, index) {
    var code = letter.charCodeAt();
    result += code > 96 ? String.fromCharCode(97 - code + 122) : letter;
    if (index % 5 === 0) result += " ";
  });
  return result.trim();
}