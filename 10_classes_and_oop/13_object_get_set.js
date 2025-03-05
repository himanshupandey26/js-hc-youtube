const User = {
  _email: 'h@hc.com', // _ for private property
  _password: "abc",

// getter setter special method put over the property
  get email(){
      return this._email.toUpperCase()
  },

  set email(value){
      this._email = value
  }
}

const tea = Object.create(User)
console.log(tea.email); 