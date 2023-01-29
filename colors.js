let Body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}
let Links = {
  setColor: function (color) {
    let alist = document.querySelectorAll('a');
    let i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i++;
    }
  }
}
function nightDayHandler(self) {
  let target = document.querySelector('body');

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