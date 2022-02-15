# Mudi



**제목의 의미** : music diary의 줄임말  
<br>

<div align=center><h1>📚 STACKS</h1></div>


<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  
  

   
  <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>  
<br>


## 프로젝트 목적
평소에 노래듣는것을 좋아하는데  
노래를 들으면 그때의 기억, 감정들이 떠오를때가 있다.  
그 기억들을 노래마다 기록하고 싶었는데,  
melon에는 그런기능이 없어 직접 개발하게 되었다.

## 구현사항 (CRUD)
<li>플레이리스트 추가</li>
<img src="https://user-images.githubusercontent.com/46774346/154080972-e7f0fc56-15cb-4040-af82-522e2cbbe174.gif">
<br>
<li>플레이리스트 수정</li>
<img src="https://user-images.githubusercontent.com/46774346/154082863-65ae44b0-a674-45ff-8317-5458cd023eff.gif">
<br>
<li>플레이리스트 삭제</li>
<img src="https://user-images.githubusercontent.com/46774346/154083724-fb8f1e5b-1b0c-4c67-8392-d2d8977e569d.gif">
<br>
<li>곡 추가</li>
<img src="https://user-images.githubusercontent.com/46774346/154086189-74a53f1e-2c71-4cb4-bbf6-2de3257ccfec.gif">
<br>
<LI>곡 수정</LI>
<img src="https://user-images.githubusercontent.com/46774346/154086215-b1508152-f9e1-456e-b135-e43642c8063b.gif">
<br>
<LI>곡 삭제</LI>
<img src="https://user-images.githubusercontent.com/46774346/154086207-ae44adcb-fcb2-438f-883f-ec7371f4c9ed.gif">
<br>
<li>플레이리스트 선택</li>
<img src="https://user-images.githubusercontent.com/46774346/154087269-d81b4500-6cb6-4ad5-8e36-1b31a4a51c7e.gif">



## 개발기간
2021.12.26 ~ 2022.02.16
<br>

## 참고 사이트&과정
생활코딩 - https://opentutorials.org/course/1  

WEB1-HTML&INTERNET  

WEB2-CSS  

WEB2-Javascript  

WEB2-Node.js  

WEB2-Node.js-MYSQL  


## 데이터베이스 테이블
<img src="https://user-images.githubusercontent.com/46774346/154089606-88dd6867-07ee-41fc-8a5f-451f848f075e.png">
playlist, song 두개의 테이블을 이용함
<br>
<br>
<br>
<img src="https://user-images.githubusercontent.com/46774346/154089618-c528b808-fc06-4feb-8bf8-7a533620a11a.png">
playlist에는 고유id, 플레이리스트 이름, 저장된 곡의 개수를 나타내는 행이 있다
<br>
<br>
<br>
<img src="https://user-images.githubusercontent.com/46774346/154089639-ed053dba-77da-41d6-b7bf-b9fdd5fbb286.png">
song에는 고유id, 곡제목, 가수이름, 기록, 플레이리스트id가 있다


## 부족한점
#### 1.배포를 하지 못한 점
웹사이트를 만들어서 사용자가 이용하게끔 하는 것이 목표였는데,  
배포를 하려면 express를 사용하는 사람들이 많았고,  
docker,AWS,EC2등 서버에 대한 지식이 필요한데  
아직 지식이 부족해 손대지 못했다  

<br>
#### 2.css를 입히지 못한점
이것도 1번과 비슷한 맥락인데,  
nodejs로 main.js를 실행 파일로 만들었더니  
css를 어떻게 적용할지 몰랐다  
이걸 하기위해서는 express를 사용해야하는 것 같다.  
하지만 시간상 express를 공부하기 벅차서 css는 적용하지 못했다.

#### 3. 검색, 정렬기능을 구현하지 못한점 
CRUD외에도 곡 검색, 곡 이름순정렬 등  
추가기능을 하고싶었지만 시간이 부족한 관계로  
CRUD까지만 구현했다.
<br>


## 잘한점
부족한점이 당연히 더 많지만  
처음 내 목표는 동적웹사이트 구현, 배포였다.  
배포는 하지못했지만 내 로컬 환경에서만큼은  
사용자로부터 정보를 입력받아 동적으로 저장하고  
반영하는 기능구현에 성공했다.  
이를 하기 위해 javascript로 사용자로부터 데이터 입력받기,
mariadb로 입력받은 데이터 저장하기,  
nodejs로 사용자로부터 받은 데이터 반영하기의 기술을 다루게 되었다.

