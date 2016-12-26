const getNavOffsetTop = () => {
  const { offsetTop } = document.querySelector('.navbar') as HTMLElement;
  return offsetTop;
};

const onScroll = () => (window.scrollY >= navOffsetTop)
  ? document.body.classList.add('fixed-nav')
  : document.body.classList.remove('fixed-nav');

let navOffsetTop = getNavOffsetTop();

window.addEventListener('resize', () => {
  document.body.classList.remove('fixed-nav');
  navOffsetTop = getNavOffsetTop();
  onScroll();
});

window.addEventListener('scroll', onScroll);

