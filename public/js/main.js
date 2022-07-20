//scrool animation
let rellax = new Rellax('.rellax',{
    center:true
});

//sticky navbar
const navBar=document.querySelector('.navbar')
const banner=document.querySelector('.banner-area')
const headerObserver = new IntersectionObserver((e)=>{
    if(!e[0].isIntersecting){
        navBar.classList.add('sticky','animate__animated','animate__fadeInDown')
    }else if(e[0].isIntersecting){
        navBar.classList.remove('sticky','animate__animated','animate__fadeInDown')
    }
}, {
    root: null,
    threshold: 0,
    // rootMargin: `-${navHeight}px`,
});
headerObserver.observe(banner);

//////////////////////////fading animation work-erea////////////////////////////////
const cardSections = document.querySelector('.card-erea');
const cards=document.querySelectorAll('.service-cards')

cards.forEach(card=>{
  card.classList.add('section--hidden')
})

const revealCards = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  cards.forEach(card=>{
    card.classList.remove('section--hidden')
    card.classList.add('animate__animated','animate__fadeInUp')
  })
  observer.unobserve(entry.target);
};

const cardObserver = new IntersectionObserver(revealCards, {
  root: null,
  threshold: 0.15,
});

cardObserver.observe(cardSections);

//////////////////////////fading animation work-erea////////////////////////////////
const workSections = document.querySelector('.work-erea');
const works=document.querySelectorAll('.work-container')

works.forEach(work=>{
    work.classList.add('section--hidden')
})

const revealWork = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  works.forEach(work=>{
    work.classList.remove('section--hidden')
    work.classList.add('animate__animated','animate__fadeInUp')
  })
  observer.unobserve(entry.target);
};

const workObserver = new IntersectionObserver(revealWork, {
  root: null,
  threshold: 0.15,
});

workObserver.observe(workSections);

//////////////////////////fading animation articles-erea//////////////////////////////

const articlesSections = document.querySelector('.article-area');
const articles=document.querySelectorAll('.article')

articles.forEach(article=>{
    article.classList.add('section--hidden')
})

const revealArticles = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  articles.forEach(article=>{
    article.classList.remove('section--hidden')
    article.classList.add('animate__animated','animate__fadeInLeft')
  })
  observer.unobserve(entry.target);
};

const articlesObserver = new IntersectionObserver(revealArticles, {
  root: null,
  threshold: 0.15,
});

articlesObserver.observe(articlesSections);

//////////////////////////fading animation ready-erea////////////////////////////////
const startedSections = document.querySelector('.started-erea');
startedSections.classList.add('section--hidden')


const revealStarted = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  startedSections.classList.add('animate__animated','animate__zoomIn')
  startedSections.classList.remove('section--hidden')
  observer.unobserve(entry.target);
};

const startedObserver = new IntersectionObserver(revealStarted, {
  root: null,
  threshold: 0.15,
});

startedObserver.observe(startedSections);
