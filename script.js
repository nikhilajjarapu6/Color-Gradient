//functions to update button click and text area update based on button clicks
function selectArrow(arrow) {
    const arrows = document.querySelectorAll('button');
    arrows.forEach((arrow) => {
      arrow.classList.remove('selected');
    });
    arrow.classList.add('selected');                                                  //adding effect only for clicked button
    const direction=arrow.getAttribute('data-direction');                             
    const textArea = document.querySelector('.area');
    textArea.textContent = `linear-gradient(${direction}, ${getColors()})`;           //updating text area content every time button clicked
    updateBackground(direction)
    
  }

  function getColors() {
    const colors = document.querySelectorAll('.color-value');
    return `${colors[0].textContent}, ${colors[1].textContent}`;                     //returns colors that changed in color value span tags
  }

  
//function for changing color of two buttons and update coolor values
function changeColor(input, index) {
    const color = input.value;
    // const buttons = document.querySelectorAll('.color-tabs input[type="color"]');
    const colorValues = document.querySelectorAll('.color-value');
    colorValues.forEach((colorValue, i) => {
      if (i === index) {
        colorValue.textContent = color;
      }
    });
    updateBackground();   
                                                              //when the colors are chanaged background shsould also change   
}

function updateBackground(direction){
  const colors=document.querySelectorAll('.color-value')
  const color1 = colors[0].textContent;
  const color2 = colors[1].textContent;
  document.body.style.background=`linear-gradient(${direction}, ${color1}, ${color2})`;
}
document.addEventListener('DOMContentLoaded', updateBackground);


function refreshButtonClick() {
  const randomColor1=generateRandom();
  const randomColor2=generateRandom();
  const colors = document.querySelectorAll('.color-tabs input[type="color"]');
  const colorValues = document.querySelectorAll('.color-value');
  const textArea=document.querySelector('.area')

  colors[0].value=randomColor1
  colors[1].value=randomColor2
  colorValues[0].textContent=randomColor1
  colorValues[1].textContent=randomColor2
  const directions = ['to right', 'to left', 'to top', 'to bottom', 'to right top', 'to right bottom', 'to left top', 'to left bottom','to right at center'];
  const randomDirection = directions[Math.floor(Math.random() * directions.length)];
  textArea.textContent=`linear-gradient(${randomDirection}, ${randomColor1}, ${randomColor2})`

  updateBackground(randomDirection);
}

function generateRandom(){
  return'#'+(Math.random().toString(16)+'000000').substring(2,8).toUpperCase();
}
document.getElementById('refresh').addEventListener('click', refreshButtonClick);




function generateButtonClick() {
  const colors = document.querySelectorAll('.color-value');
  const color1 = colors[0].textContent;
  const color2 = colors[1].textContent;
  const directionButton = document.querySelector('button.selected');
  const direction = directionButton.getAttribute('data-direction');
  const textArea = document.querySelector('.area');

  textArea.textContent = `linear-gradient(${direction}, ${color1}, ${color2})`;
  updateBackground(direction);
  
}

copyCode=()=>{
  const textArea = document.querySelector('.area');
  navigator.clipboard.writeText(textArea.value);
  const btn=document.getElementById('btn');
  btn.innerText='code copied';
  setTimeout(()=>{
    btn.innerText="copy code"
  },2000)
}

document.getElementById('generate').addEventListener('click', generateButtonClick);
document.getElementById('btn').addEventListener('click',copyCode);



  