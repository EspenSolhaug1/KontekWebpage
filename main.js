window.onscroll = function() {stickyNavbar()};
var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

document.querySelectorAll('.nav-item').forEach(item => {
  var timeout;

  item.addEventListener('mouseenter', function() {
      clearTimeout(timeout);
      this.querySelector('.dropdown-menu').classList.remove('dropdown-menu-hidden');
  });

  item.addEventListener('mouseleave', function() {
      var self = this;
      timeout = setTimeout(function() {
          self.querySelector('.dropdown-menu').classList.add('dropdown-menu-hidden');
      }, 1500);
  });
});


let currentSize = 'all';
let currentTag = 'all';
/**
 * References filter tags
 */

function filterGallerySize(range, rangeElement) {
  let filterSizeButtons = document.getElementById("sizeFilterContainer").getElementsByClassName('filter-btn');
  
  for (let i = 0; i < filterSizeButtons.length; i++) {
    filterSizeButtons[i].classList.remove('activeRange');
    
    if (filterSizeButtons[i].textContent.trim() === rangeElement.textContent.trim()) {
      filterSizeButtons[i].classList.add('activeRange');
    }
  }

  currentSize = range;
  applyFilters();
}

function filterGallery(tag, tagElement) {
  let filterTagButtons = document.getElementById("tagFilterContainer").getElementsByClassName('filter-btn');
  
  for (let i = 0; i < filterTagButtons.length; i++) {
    filterTagButtons[i].classList.remove('activeTag');
    
    if (filterTagButtons[i].textContent.trim() === tagElement.textContent.trim()) {
      filterTagButtons[i].classList.add('activeTag');
    }
  }

  currentTag = tag;
  applyFilters();
}

function applyFilters() {
  let galleryElements = document.getElementsByClassName('gallery');

  for (let i = 0; i < galleryElements.length; i++) {
    if (shouldShowElement(galleryElements[i])) {
      galleryElements[i].style.display = 'block';
    } else {
      galleryElements[i].style.display = 'none';
    }
  }
}

function shouldShowElement(element) {
  let size = parseInt(element.getAttribute('data-size'));
  let isSizeMatch = false;

  if (currentSize === 'all') {
    isSizeMatch = true;
  } else if (currentSize === '10000' && size >= parseInt(currentSize)) {
    isSizeMatch = true;
  } else {
    let [minSize, maxSize] = currentSize.split('-').map(Number);
    if (size >= minSize && size <= maxSize) {
      isSizeMatch = true;
    }
  }

  let isTagMatch = currentTag === 'all' || element.classList.contains(currentTag);
  return isTagMatch && isSizeMatch;
}


/**
 * Home projects
 */
$(".scroll-left").click(function() {
  $(".scrolling-wrapper").animate({scrollLeft: "-=300px"}, "smooth");
});

$(".scroll-right").click(function() {
  $(".scrolling-wrapper").animate({scrollLeft: "+=300px"}, "smooth");
});

