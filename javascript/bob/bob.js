var Bob = function () { };

Bob.prototype.hey = function (input) {
  input = input.trim()
  if (!input) {
    return "Fine. Be that way!";
  }
  if (input === input.toUpperCase() && input != input.toLowerCase()) {
    return "Whoa, chill out!";
  }
  if (input.slice(-1) === "?") {
    return "Sure.";
  }
  return "Whatever.";
};

module.exports = Bob;
