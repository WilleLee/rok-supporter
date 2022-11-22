const hps = {
  petrol1: 10,
  petrol2: 16,
  petrol3: 20,
  resource: 3,
  fort1: 30,
  fort2: 45,
  fort3: 60,
  fort4: 80,
  fort5: 100,
};

class hpCalculators {
  static petrol1(num) {
    return num * hps.petrol1;
  }
  static petrol2(num) {
    return num * hps.petrol2;
  }
  static petrol3(num) {
    return num * hps.petrol3;
  }
  static resource(num) {
    return num * hps.resource;
  }
  static fort1(num) {
    return num * hps.fort1;
  }
  static fort2(num) {
    return num * hps.fort2;
  }
  static fort3(num) {
    return num * hps.fort3;
  }
  static fort4(num) {
    return num * hps.fort4;
  }
  static fort5(num) {
    return num * hps.fort5;
  }
}

export default hpCalculators;
