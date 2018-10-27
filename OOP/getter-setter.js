const data = {
  // _location: '', // not necessary to include it here
  locations: [],
  get location() {
    return this._location + ' (from getter)';
  },
  set location(location) {
    this._location = location.trim() + '!!'; // can perform functions on input before setting
    this.locations.push(this._location); // can keep track of every location that has been set
  },
};

// code that uses the data object
data.location = '  Philly ';
data.location = ' New York   ';
console.log(data.location);
console.log(data.locations);
