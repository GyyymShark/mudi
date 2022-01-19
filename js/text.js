

function DiaryRecord(){
    const textvalue=document.getElementById('textbox');
    const div=document.getElementById('area');
    const newDiv=document.createElement("div");
    const diary=document.getElementById('diary4');

    let li=document.createElement('div');
    li.append(textvalue.value);
    diary.append(li);
}