let i=0;

function AddSongTitle(){
    const playlist=document.getElementById('playlist'); //새 element를 삽입할 공간
    const songtitle=document.createElement('div');      //새로운 element 생성
    const textvalue=document.getElementById('songtitle').value; //사용자로부터 입력받은 텍스트(songtitle)
    const br=document.createElement('br');
    i++;
    songtitle.id='calmtitle'+i;    //songtitle에 고유번호를 붙여 id 추가
    songtitle.className='genre';  //css를 입히기 위해 class 추가
    
    songtitle.append(textvalue) //songtitle에 텍스트 추가
    playlist.append(songtitle); //playlist에 텍스트 추가
    
}

function AddSongArtist(){

    const songtitle=document.getElementById('calmtitle'+i);
    const textvalue=document.getElementById('songartist').value; //사용자로부터 입력받은 텍스트(songtitle)
    const br=document.createElement('br');
   
 
    
    songtitle.append(br);       //한줄 줄바꿈
    songtitle.append(textvalue) //가수 텍스트 추가


}

function AddSongDiary(){
    const diary=document.createElement('span');
    const textvalue=document.getElementById('songdiary').value;
    const songtitle=document.getElementById('calmtitle'+i);
    const p=document.createElement('p');
    const playlist=document.getElementById('playlist');

    diary.className='diary';
    diary.append(textvalue);

    songtitle.append(diary);
    playlist.append(p);
}