

var counter = {
 count:0,
  init: function(){
  counter.cacheDom();
  counter.addEventListeners();
  counter.render();
},


cacheDom: function(){
  counter.downButton = document.querySelector('#downButton');
  counter.upButton = document.querySelector('#upButton');
  counter.currentCount = document.querySelector('#currentCount');
},

render: function(){
console.log(counter.count);
counter.currentCount.innerHTML = counter.count;
},


addEventListeners: function(){
counter.upButton.addEventListener('click', counter.countUp);
counter.downButton.addEventListener('click', counter.countDown);
},

countUp: function(){
    counter.count += 1;
    counter.render();
  },

countDown: function() {
   if (counter.count > 0){
      counter.count -= 1;
    }

counter.render();
  }
};

counter.init();
