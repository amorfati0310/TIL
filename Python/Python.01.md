1. 파이썬 설치 

* 맥에서 설치 

[홈브르 설치](https://brew.sh/index_ko.html)

`/usr/bin/ruby -e "$(curl -fsSL
https://raw.githubusercontent.com/Homebrew/install/master/install)"`

`brew install python3`

[윈도우_파이썬_설치](https://wikidocs.net/8)

윈도우 파이썬.org<br>
python3 add 3.6.4 path checking and install
환경변수에 파이썬 경로를 추가 

> 파이썬 나갈 때 명령어 exit(), quit()

> 터미널 기본 명령어

```
cd changeDiresctory
pwd or cd ~/ 현재 directory 
open . 지금 경로 열어 
.은 상대경로 
ls 파일 들 보여주는 것 
ls -al 전부 보여드리는 것 
d는 directory    생성일자 
clear 지우기 
~ 경로를 의미함 
mkdir 폴더생성 
rm 파일 지우기 
rm -rf 폴더 및 하위 항목 다 지우기 
```

서버는 주로 리눅스 리눅스 도 공부하면 좋음 !


> 윈도우 powershell or gitbash or cmder 설치 

개인적으로는 gitbash -> cmder추천 (리눅스 기반 명령어 안 되는 것이 좀 있음 근데 cmder이 더 예쁨 ..)

> repl 환경 

`다양한 interperter에서 쓰는 환경 `read, e실행, print, loop  


> Ref 

[Do_it_python](https://wikidocs.net/742)
[튜토리얼](https://docs.python.org/3/tutorial/)

> 컴퓨팅사고력 이게 제일 중요!

알고리즘 -> 답을 찾아가는 과정<br>
인터프리터 언어 동시통역 / 실행속도가 빠르진 않음 
컴파일러 쭈욱 1~2시간 걸리는 경우도 있음 
바로 바로 실행되는 언어
고급언어 사람에게 좀 더 친숙한 

> Jupyter and Python

* Data and etc Jupyther 

`pip3 intall jupyter`
`jupyter notebook`

* Jupiter 살향하면 웹에서 실행화면이 뜨고 파일을 만들어 `shift+enter`를 통해서 명령구문들을 실행 할 수가 있다.  

기본사용 옵션 <br>
* 파란색 눌렀을 때 dd 삭제  
*  l,y,m 으로 옵션 변경 
1. l 줄 표시
1. y 파이썬 
1. m 마크다운 형태로 표시 



* Web VSCode

VScode 설치 

확장 프로그램 설치 python 
python file 시작하면 lint 설치하라고 하는데 
이 때 오류가 나면 `cmd+,` 설정에서 python path를 가지고 와서 사용자 설정에 집어넣어주고 python경로 역시 기존에 python이라고 되어 있는 부분을 수정해주어야 하는데  터미널에서 which python이라고 입력하여 python이 설치된 경로를 입력해줍니다 
`"python.pythonPath": "/usr/local/bin/python3" `

> 기본적인 자료형들을 알아봅시다 

1. Number 
숫자에서 나머지 연산자가 `%`, 소수점을 버리는 연산자 `//`


2. String 
''
""
\''' 멀티라인은 3개를 써서 표현


