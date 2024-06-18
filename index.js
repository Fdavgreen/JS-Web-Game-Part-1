


function newImage(src, left, bottom) {
    let img = document.createElement('img'); 
    img.src = src; 
    img.style.position = 'fixed'; 
    img.style.left = left; 
    img.style.bottom = bottom; 
    document.body.append(img); 
    return img; 
  }
  
 
  function newItem(src, left, bottom) {
    let item = newImage(src, left, bottom); 
    item.addEventListener('dbclick', function() {
      item.remove(); 
    });
  }

  function createBackground() {
    let tileSize = 100;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
  

    let columns = Math.ceil(screenWidth / tileSize);
    let rows = Math.ceil(screenHeight / tileSize);
  

    for (let y = 0; y < rows / 2; y++) {
      for (let x = 0; x < columns; x++) {
        newImage('assets/sky.png', `${x * tileSize}px`, `${screenHeight - (y + 1) * tileSize}px`);
      }
    }
  

    for (let y = rows / 2; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        newImage('assets/grass.png', `${x * tileSize}px`, `${screenHeight - (y + 1) * tileSize}px`);
      }
    }
  }
  
  createBackground();
  
  

  newImage('assets/green-character.gif', '100px', '100px');
  newImage('assets/pine-tree.png', '450px', '200px');
  newImage('assets/tree.png', '200px', '300px');
  newImage('assets/pillar.png', '350px', '100px');
  newImage('assets/crate.png', '150px', '200px');
  newImage('assets/well.png', '500px', '355px');


  

  newItem('assets/sword.png', '500px', '405px');
  newItem('assets/shield.png', '165px', '185px');
  newItem('assets/staff.png', '600px', '100px');


  



