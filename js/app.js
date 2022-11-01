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
        item.style.fontSize = '1.5em'
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

    document.querySelectorAll('.boss').forEach((item) => {
        item.addEventListener('mouseout', (evt) => {
            //evt.stopPropagation();
            evt.currentTarget.classList.toggle('invert')
        }
    ,
    {capture:true})
        item.addEventListener('mouseenter', (evt) => {
        //evt.stopPropagation()
        evt.currentTarget.classList.toggle('invert')
        },
        {capture:true})
    });

    const horcruxList = document.querySelector('#horcrux > ul');
    horcruxList.addEventListener('mouseover', event => {
        let image = document.createElement('img');
        image.alt = event.target.textContent;
        switch (event.target.textContent){
            case "Dracula's Nail":
                image.src=`images/nail.png`;
                break;
            case "Dracula's Eye":
                image.src=`images/eye.png`;
                break;
            case "Dracula's Rib":
                image.src=`images/rib.png`;
                break;
            case "Dracula's Ring":
                image.src=`images/ring.png`;
                break;
            case "Dracula's Heart":
                image.src=`images/heart.png`;
                break;
            default:
                image.src = `images/nail.png`;
                break;
        }
        const container = document.getElementById('horcrux-img');
        while(container.hasChildNodes()){
            container.childNodes[0].remove();
        }
        container.appendChild(image);
    });

    const weaponsList = document.querySelector('#weapons > ul');
    weaponsList.addEventListener('mouseover', event => {
        let image = document.createElement('img');
        image.alt = event.target.textContent;
        switch (event.target.textContent){
            case 'Holy Water':
                image.src = 'images/holywater.png';
                break;
            case 'Sacred Flame':
                image.src = 'images/flame.png';
                break;
            case 'The Diamond':
                image.src = 'images/diamond.png';
                break;
            case 'The Dagger':
                image.src = 'images/dagger.png';
                break;
            case 'Silver Knife':
                image.src = 'images/silverKnife.png';
                break;
            case 'Gold Knife':
                image.src = 'images/goldKnife.png';
                break;
            case 'Oak Stake':
                image.src = 'images/stake.png';
                break;
            case 'Garlic':
                image.src = 'images/garlic.png';
                break;
            case 'Laurels':
                image.src = 'images/laurel.png';
                break;
            case 'Leather Whip':
                image.src = 'images/whip.png';
                break;
            case 'Thorn Whip':
                image.src = 'images/thornWhip.png';
                break;
            case 'Chain Whip':
                image.src = 'images/chainWhip.png';
                break;
            case 'Morning Star':
                image.src = 'images/MorningStar.png';
                break;
            case 'Flame Whip':
                image.src = 'images/flameWhip.png';
                break;
            default:
                image.src = 'images/whip.png';
                break;
        }
        const container = document.getElementById('weapon-img');
        while(container.hasChildNodes()){
            container.childNodes[0].remove();
        }
        container.appendChild(image);
    })
  
});