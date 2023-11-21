const images = [1,2,3,4,5,6,7,8,9,10];

const show = () => {
  for (let i = 0; i < images.length; i++) {
    let li = document.createElement('li');
    li.className = "col col-sm-12 col-md-6 col-lg-3";

    let img = document.createElement('img');
    img.src = `img/${images[i]}.jpg`;
    img.className = "rounded mx-auto my-auto d-block";

    img.ondblclick = (e) => {
      e.target.src = 'img/11.jpg';
    }
  
    li.appendChild(img);
    document.querySelector('#img-container').appendChild(li);
  }

  document.querySelector('#btn-show').style.display = 'none';
}

const shuffle = () => {
  // isrikiuoja images atsitiktine tvarka.
  images.sort(() => Math.random() - 0.5);

  let imgs = document.querySelectorAll('#img-container li img');
  for (let i = 0; i< imgs.length; i++) {
    imgs[i].src = `img/${images[i]}.jpg`;
  }
}




