let Body = {
  setColor: function (color) {
    $('body').css('color', color);
  },
  setBackgroundColor: function (color) {
    $('body').css('backgroundColor', color);
  }
}
let Links = {
  setColor: function (color) {
    $('a').css('color', color); 
  }
}
function nightDayHandler(self) {
  if (self.textContent === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.textContent = 'day';

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.textContent = 'night';

    Links.setColor('');
  }
}