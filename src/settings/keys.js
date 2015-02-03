var token = {
  isValid: "IsValid",
  message: "Message"
}

Object.freeze(token);

export class Keys {
  get token() {
    return token;
  }
}
