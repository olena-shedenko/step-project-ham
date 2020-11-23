const images = [
    'img/graphic-design/graphic-design1.jpg',
    'img/web-design/web-design1.jpg',
    'img/landing-page/landing-page1.jpg',
    'img/wordpress/wordpress1.jpg',
    'img/graphic-design/graphic-design2.jpg',
    'img/web-design/web-design2.jpg',
    'img/landing-page/landing-page2.jpg',
    'img/wordpress/wordpress2.jpg',
    'img/graphic-design/graphic-design3.jpg',
    'img/web-design/web-design3.jpg',
    'img/landing-page/landing-page3.jpg',
    'img/wordpress/wordpress3.jpg',
    'img/graphic-design/graphic-design4.jpg',
    'img/web-design/web-design4.jpg',
    'img/landing-page/landing-page4.jpg',
    'img/wordpress/wordpress4.jpg',
    'img/graphic-design/graphic-design5.jpg',
    'img/web-design/web-design5.jpg',
    'img/landing-page/landing-page5.jpg',
    'img/wordpress/wordpress5.jpg',
    'img/graphic-design/graphic-design6.jpg',
    'img/web-design/web-design6.jpg',
    'img/landing-page/landing-page6.jpg',
    'img/wordpress/wordpress6.jpg',
    'img/graphic-design/graphic-design7.jpg',
    'img/web-design/web-design7.jpg',
    'img/landing-page/landing-page7.jpg',
    'img/wordpress/wordpress7.jpg',
    'img/graphic-design/graphic-design8.jpg',
    'img/wordpress/wordpress8.jpg',
    'img/graphic-design/graphic-design9.jpg',
    'img/wordpress/wordpress9.jpg',
    'img/graphic-design/graphic-design10.jpg',
    'img/wordpress/wordpress10.jpg',
    'img/graphic-design/graphic-design11.jpg',
    'img/graphic-design/graphic-design12.jpg',
];

let sectionLoaded = 0;

/* 
******TABS TOGGLE******
*/

function openTab(event) {
    if (event.target.tagName != 'LI') return;
    document.querySelector('.service-tab-button.active').classList.remove('active');
    event.target.classList.add('active');

    document.querySelector('.tab-content-item.active').classList.remove('active');
    document.querySelector(`.tab-content-item[data-tab="${event.target.dataset.tab}"]`).classList.add('active');
}

document.querySelector('.service-tab-buttons').addEventListener('click', openTab);

/* 
******END OF TABS TOGGLE******
*/


/* 
******OUR AMAZING WORK CATEGORY******
*/

const preloader = document.querySelector('.preloader');
preloader.remove();
const imagesContainer = document.querySelector('.work-images');
const hover = document.querySelector('.work-images-item-hover');
const categoryText = document.querySelector('.work-images-hover-text');
hover.remove();
const loadMoreBtn = document.querySelector('.works-images-button');


function addImage(path) {
    const imageItem = document.createElement('div');
    imageItem.classList.add('work-images-item', 'active');
    imageItem.insertAdjacentHTML('afterbegin', `
        <img class="work-images-item-img" src="${path}" alt="Our amazing work image">
   `);

   imagesContainer.append(imageItem);
}

function loadSection() {
    if (sectionLoaded >= 3 ) return;

    images.slice(sectionLoaded * 12, (sectionLoaded + 1) * 12)
        .forEach(path => addImage(path));

    sectionLoaded++;
}

loadSection();

loadMoreBtn.addEventListener('click',() => {
    imagesContainer.after(preloader);
    loadMoreBtn.style.marginTop = '0px';
    setTimeout(() => {
        preloader.remove();
        loadMoreBtn.style.marginTop = '72px';
        loadSection(); 
        if(sectionLoaded == 3 ) {
            loadMoreBtn.remove();
       }
    }, 2000);
    
   

});

function openCategory(event) {
    if (event.target.tagName != 'LI') return;
    // console.log('***: ', event.target.tagName);
    document.querySelector('.tab-button.active').classList.remove('active');
    event.target.classList.add('active');

    
    const allImages = document.querySelectorAll('.work-images-item-img');
    allImages.forEach(img => {
        if(img.attributes.src.value.includes(event.target.dataset.tabCategory)) {
            img.parentElement.classList.add('active');
            img.parentElement.classList.remove('non-active');
            loadMoreBtn.classList.add('non-active');
            loadMoreBtn.classList.remove('active');
            categoryText.textContent = event.target.textContent;


        } else {
            img.parentElement.classList.add('non-active');
            img.parentElement.classList.remove('active');
            loadMoreBtn.classList.remove('non-active');
            loadMoreBtn.classList.add('non-active');
            loadMoreBtn.classList.remove('active');
        }

        if(event.target.dataset.tabCategory == 'All') {
            img.parentElement.classList.remove('non-active');
            img.parentElement.classList.add('active');
            loadMoreBtn.classList.add('active');
            loadMoreBtn.classList.remove('non-active');
            categoryText.textContent = event.target.dataset.tabCategory;
        }

    })

}

document.querySelector('.work-tab-buttons').addEventListener('click', openCategory);
/* 
******END OF OUR AMAZING WORK CATEGORY******
*/

/* HOVER
***
*/
imagesContainer.addEventListener('mouseover', event => {
    
    if (!event.target.parentElement.contains(hover)){
        event.target.parentElement.append(hover);
      }
})

/* END OF HOVER
***
*/

/* 
******SWIPER******
*/


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    initialSlide: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/* 
******END OF SWIPER******
*/


/* 
******MASONRY******
 */

const loadGalleryBtn = document.querySelector('.gallery-button');
const preloaderGallery = document.querySelector('.gallery-preloader');
preloaderGallery.remove();
const galleryHover = document.querySelector('.gallery-grid-item-hover');
galleryHover.remove();
const grid = document.querySelector('.gallery-grid');

// Hover
grid.addEventListener('mouseover', event => {
    if(!event.target.parentElement.contains(galleryHover)) {
        event.target.parentElement.append(galleryHover);
    }
})

function addGalleryImage(path) {
    const imageItem = document.createElement('div');
    imageItem.classList.add('gallery-grid-item');
    imageItem.insertAdjacentHTML('afterbegin', `
        <img class="gallery-grid-img" src="${path}" alt="Gallery of best images">
   `);
   grid.append(imageItem);
   return imageItem;
}

function loadGallerySection() {
    if (sectionLoaded >= 3 ) return;
  
    const elems = images.slice(sectionLoaded * 12, (sectionLoaded + 1) * 12)
        .map(path => addGalleryImage(path));
  
    sectionLoaded++;
    return elems;
}
  
loadGalleryBtn.addEventListener('click',() => {
    grid.after(preloader);
    loadGalleryBtn.style.marginTop = '0px';
    setTimeout(() => {
        preloader.remove();
        loadGalleryBtn.style.marginTop = '72px';
        const elems = loadGallerySection();
        imagesLoaded(grid, () => {
          msnry.appended(elems);
          msnry.layout();
          document.querySelector('.grid-container-small').style.top = '0';  
        });
        if(sectionLoaded == 3 ) {
          loadGalleryBtn.remove();
       }
    }, 2000);
    
   
  
  });

const msnry = new Masonry( grid, {
    itemSelector: '.gallery-grid-item',
    isFitWidth: true,
    gutter: 20,
    columnWidth: 373
    
});

const msnry_sm = new Masonry( '.grid-container', {
    itemSelector: '.grid-container-item',
    isFitWidth: true,
});

const msnry_xs = new Masonry( '.grid-container-small', {
    itemSelector: '.grid-container-item-small',
    gutter: 2,
    columnWidth: 123
});

imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry_xs.layout();
  });
// document.addEventListener('DOMContentLoaded', function() {
    
// })
document.querySelector('.grid-container-small').style.top = '0';

/* 
******END OF MASONRY******
*/



