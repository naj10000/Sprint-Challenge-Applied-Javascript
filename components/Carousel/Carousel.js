/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function carouselComponent(x){

  //create Elements
  const carousel = document.createElement('div');
  const leftBtnDiv = document.createElement('div');
  // const leftBtn = document.createElement('button');
  const rightBtnDiv = document.createElement('div');
  // const rightBtn = document.createElement('button');
  const mountainImg = document.createElement('img');
  const computerImg = document.createElement('img');
  const treesImg = document.createElement('img');
  const turnTableImg = document.createElement('img');
  const current = 0;

  /// add classes

  carousel.classList.add('carousel');
  leftBtnDiv.classList.add('left-button');
  rightBtnDiv.classList.add('right-button');

  ///content

  // leftBtn.textContent = "button";
  // rightBtn.textContent = "button";
  mountainImg.setAttribute('src', './assets/carousel/mountains.jpeg');
  computerImg.setAttribute('src', "./assets/carousel/computer.jpeg");
  treesImg.setAttribute('src', "./assets/carousel/trees.jpeg" );
  turnTableImg.setAttribute('src', "./assets/carousel/turntable.jpeg");
  
  //append 
  carousel.append(leftBtnDiv);
  carousel.append(rightBtnDiv);
  // leftBtnDiv.appendChild(leftBtn);
  // rightBtnDiv.appendChild(rightBtn);
  carousel.appendChild(mountainImg);
  carousel.appendChild(computerImg);
  carousel.appendChild(treesImg);
  carousel.appendChild(turnTableImg);

  
  
  const imgs = [mountainImg, computerImg, treesImg, turnTableImg]
  
  function slideLeft(){
    imgs[current -1].style.display = 'block';
    current--;
  }


  rightBtnDiv.addEventListener('click',()=>{

  })

  leftBtnDiv.addEventListener('click', ()=>{
      if(current ===0){
        current = imgs.length;
      }
      slideLeft();
  })

  console.log(carousel);

  return carousel;


}

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(carouselComponent());