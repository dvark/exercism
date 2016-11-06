var Bob = function () { };

Bob.prototype.hey = function (input) {
  if (input === input.toUpperCase() && /[a-z]/i.test(input)) {
    return "Whoa, chill out!";
  } else if (input.slice(-1) === "?") {
    return "Sure.";
  } else if (/^\s*$/.test(input)) {
    return "Fine. Be that way!";
  }
  return "Whatever.";
};

module.exports = Bob;
