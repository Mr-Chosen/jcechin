function openMyLinkProfile(url) {
   window.open(url, '_blank');
   return false;
}

const topButton = document.getElementById('topButton');
const topOfPage = document.getElementById('topOfPage');

function handleLikeButtonClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
topButton.addEventListener('click', handleLikeButtonClick);
function toggleLikeButtonVisibility() {
  if (window.scrollY > 100) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
}
toggleLikeButtonVisibility();
window.addEventListener('scroll', toggleLikeButtonVisibility);