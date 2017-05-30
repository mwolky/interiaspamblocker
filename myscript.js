window.addEventListener("load",windowLoaded);
function windowLoaded(){
    window.setInterval(function(){
        let section = document.querySelector('.msglist-container');
        let ul = document.querySelector('.msglist');
        let sectionHeight = section.scrollHeight;
        let ulHeight = ul.scrollHeight;
        let heightDifference = sectionHeight - ulHeight;
        let message = document.querySelectorAll(".msglist-item");
        message.forEach(function(element,i){
            let heading = element.querySelector('h2');
            let span = heading.querySelector('span[title="mailing@interia.pl"]');
            if(span){
                element.classList.add('minteria__spam--invisible');
            }
        });
        let spacer = document.createElement('div');
        spacer.classList.add('minteria__spam--div');
        spacer.style.height = heightDifference + 'px';
        if(heightDifference > 60){
            ul.appendChild(spacer);
        }    
    },1000);
}
