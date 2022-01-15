function SetGenreColor(color){

    if(color==='Aqua'){
        let textlist=document.querySelectorAll('#text');
        let i=0;
        while(i<textlist.length){
            textlist[i].style.color='black';
            i++;
        }
    }
    else if(color==='dimgrey'){
        let textlist=document.querySelectorAll('#text');
        let i=0;
        while(i<textlist.length){
            textlist[i].style.color='white';
            i++;
        }
    }


    else if(color==='lime'){
        let textlist=document.querySelectorAll('#text');
        let i=0;
        while(i<textlist.length){
            textlist[i].style.color='black';
            i++;
        }
    }

    let genrelist=document.querySelectorAll('a .genre');
    let i=0;
    while(i<genrelist.length)
    {
        genrelist[i].style.backgroundColor=color;
        i++;
    }
}

