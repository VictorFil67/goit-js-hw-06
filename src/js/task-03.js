const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function imageTamplate(image) {
const {url, alt} = image;
return `<li class="image-item"><img class="image" width="1260" heigth="750" url=${url} alt=${alt}></li>`;
}

function galleryTamplate(images) {
  return images.map(imageTamplate).join('');
}

function galleryRender(images) {
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('afterbegin', galleryTamplate(images));
}

galleryRender(images);