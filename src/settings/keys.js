var token = {
  isValid: "IsValid",
  message: "Message"
}

var bet = {
  challengers: "potential_challengers"
}

Object.freeze(token);
Object.freeze(bet);

export class Keys {
  get token() {
    return token;
  }

  get bet() {
    return bet;
  }
}
