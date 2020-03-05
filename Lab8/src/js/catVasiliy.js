var catVasiliy = {
  name: 'Василий',
  birthday: new Date(),
  listOfFears: ['vacuum cleaner', 'beep'],
  listOfJoys: ['ksksks', 'Vasya'],
  meow: function () {
    console.log('Meow!');
  },
  reaction: function(feeling) {
    if (this.listOfFears.indexOf(feeling) > -1) {
      this.meow();
      console.log('run from here!!!!')
    }
    if (this.listOfJoys.indexOf(feeling) > -1) {
      for (var i = 0; i < 5; i++) {
        this.meow();
      }
    }
  },
};
