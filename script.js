const text=document.querySelector('.quote');
const author=document.querySelector('.author');
const nextBtn=document.querySelector('.next');
const tweetBtn=document.querySelector('.twitter-share-button');
const loader=document.querySelector('.loader');
const getquote=async()=>{
    loader.classList.remove('hide');
    const res=await fetch('https://type.fit/api/quotes');
    const quotes=await res.json();
    loader.classList.add('hide');
    const num=Math.floor(Math.random()*quotes.length);
    // console.log(num);
    const item=quotes[num];
    // console.log(item);
    const quote=item.text;
    const authorName=item.author;
    text.innerText=quote;
    author.innerText=authorName;
    tweetBtn.href=`https://twitter.com/intent/tweet?text=${quote}-${authorName}`
}
nextBtn.addEventListener('click',getquote);
getquote()