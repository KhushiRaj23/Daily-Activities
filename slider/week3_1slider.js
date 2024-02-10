const a = document.querySelectorAll(".slider");
var counter = 0;

a.forEach((slider, index) => {
  slider.style.top = `${index * 100}%`;
});

const top1 = () => {
  counter--;
  if(counter < 0){
    counter=0;
  }
  sliderrun();
};

const bottom2 = () => {
  counter++;
  if(counter >=a.length){
    counter=a.length - 1;
    return;
  }
  sliderrun();
};

const sliderrun = () => {
  a.forEach((slider) => {
    slider.style.transform = `translateY(-${counter * 100}%)`;
  });
};