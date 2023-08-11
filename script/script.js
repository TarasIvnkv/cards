cardSuit = [`hearts`, `diamonds`, `spades`, `clubs`];
cardPicture = [`jack`, `queen`, `king`, `t`]
cards = [];

for(num = 2; num <=10; num++){
    for(suit = 0; suit < cardSuit.length; suit++){
        info = `
        <div> 
            <p>${num}</p>
            <img src = "./images/${cardSuit[suit]}.svg" alt="${num} ${cardSuit[suit]}">
        </div>`;

        cards.push(`
        <div class="card">
            ${info}
            <div></div>
            ${info}
        </div>
        `);
    }   
}

for(pic = 0; pic < cardPicture.length; pic++){
    for(suit = 0; suit < cardSuit.length; suit++){
        info = `
        <div> 
            <p>${cardPicture[pic][0].toUpperCase()}</p>
            <img src = "./images/${cardSuit[suit]}.svg" alt="${cardPicture[pic]} ${cardSuit[suit]}">
        </div>`;

        mainPicture = cardPicture[pic] !== `t` ? cardPicture[pic] : cardSuit[suit];
       
        cards.push(`
        <div class="card">
            ${info}
            <div><img src="./images/${mainPicture}.svg"></div>
            ${info}
        </div>
        `);
    }
}

document.write(`
    <div class="container">${cards.join(``)}</div>
`);
