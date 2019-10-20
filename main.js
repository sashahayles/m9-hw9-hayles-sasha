var accordionTitle = document.querySelectorAll('#accordion .accordion-header');
var accordDesc =document.querySelectorAll('#accordion .open-p')
function openAccordion() {
  //toogle indicator
  for (i=0; i <accordionTitle.length; i++) {
    accordionTitle[i].childNodes[3].innerHTML = 'v';
  }
  this.childNodes[3].innerHTML ='^';
}
//event listener
for (i=0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener ('click', openAccordion);
}
