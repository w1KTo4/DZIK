let i = 0;
let clickAllowed = true;
let interval;
let buttondisabled = false;

function ustawPoziom(trudność) {
    if(buttondisabled)
        return;
    buttondisabled = true;
    
    switch (trudność) {
        case 'łatwy':
            interval = 2000; 
            break;
        case 'średni':
            interval = 1000; 
            break;
        case 'trudny':
            interval = 500; 
            break;
        default:
            interval = 1000; 
    }
    wypiszLiczby();
}


function wypiszLiczby() {
    if(i<70)
    
    {  var liczby = document.getElementById("liczby");
    
    liczby.innerText = i + 1;
    i++;
    clickAllowed = true;  
    setTimeout(wypiszLiczby, interval);
    }
}

function punkty() {
    if (!clickAllowed) return;  
    clickAllowed = false;  

    var punkty = document.getElementById("punkty");
    let currentPoints = punkty.innerText;

    if (i === 7 || i % 7 === 0 || i%10===7) {
        currentPoints++;
    } else {
        if(currentPoints>0)
            console.log("Przegrałeś. Twoje punkty to: "+ currentPoints);
        return;
    }
    punkty.innerText = currentPoints;
}


