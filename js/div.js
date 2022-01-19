function divtest(){
    const dynamic=document.getElementById('dynamic');
    const newDiv=document.createElement('div');
    const textbox2=document.getElementById('textbox2');
    const br=document.createElement('br');

    newDiv.className='genre';
    newDiv.append(textbox2.value);
    dynamic.append(newDiv);
    newDiv.append(br);
    newDiv.append('DEAN');
}

function divtest2(){
    const dynamic=document.getElementById('dynamic');
    const newDiv=document.createElement('div');
    const textbox2=document.getElementById('textbox2');
    const br=document.createElement('br');
    const genre=document.getElementsByClassName('genre');
    const diary=document.createElement('span');
    
    diary.className='diary';
    diary.append(textbox3.value);
    genre[0].append(diary);
    
}