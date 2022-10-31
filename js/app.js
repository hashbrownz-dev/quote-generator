let quotes = [
    `What a horrible night to have a curse.`,
    `You now prossess Dracula's Rib.`,
    `The morning sun has vanquished the horrible night.`,
    `Rumor has it, the ferry-man at Dead River loves garlic.`,
    `Laurels in your soup enhance its aroma.`,
    `Sure, I'll take you to a good place. Heh!! Heh!! Heh!!`,
    `Take my daughter, please!!`,
    `A flame is on top of the 6th tree in Denis Woods.`,
    `A magic potion will destroy the wall of evil.`,
    `You look pale, my son. You must rest in the church.`
  ];
  
document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
        document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
    
    // Part 1
    document.querySelector('#main-title').textContent = "Simon's Quotes"
    
    // Part 2
    document.querySelector('body').style.backgroundColor = 'black'
    
    // Part 3
    const weapons = document.querySelectorAll('.weapon');
    document.querySelector('#weapons > ul').removeChild(weapons[weapons.length-1]);
    
    // Part 4
    document.querySelectorAll('.special-title').forEach((item) => {
        item.style.fontSize = '2em'
    });
    
    // Part 5
    document.querySelectorAll('#past-races > li').forEach((item) => {
        if(item.textContent.trim() === 'Chicago'){
            document.querySelector('#past-races').removeChild(item)
        }
    });
    
    // Part 6
    const li = document.createElement('li')
    li.textContent = 'Laurelton'
    //document.querySelector('#past-races').appendChild(li)
    
    // Part 7
    // const blogPost = document.createElement('div')
    // blogPost.classList.add('blog-post')
    // const heading = document.createElement('h2')
    // heading.textContent = 'Laurelton'
    // const pEl = document.createElement('p')
    // pEl.textContent = 'My hometown in Queens, NY'

    // document.querySelector('main').appendChild(blogPost)

    // blogPost.appendChild(heading)
    // blogPost.appendChild(pEl)
    
    // Part 8
    document.querySelector('button').addEventListener('click', () => {
        randomQuote();
    })
    
    // Part 9

    document.querySelectorAll('.blog-post').forEach((item) => {
        item.addEventListener('mouseout', (evt) => {
            evt.currentTarget.classList.toggle('purple')
        })
        item.addEventListener('mouseenter', (evt) => {
        evt.stopPropagation()
        evt.currentTarget.classList.toggle('red')
        })
    });
  
});