# 파이썬 자료형 and 조건문 and For 

## 파이썬 점프투 파이썬 

# 01 파이썬 ~~개요 하면서 점검 

파이썬 사람에게 친숙하고 직관적이고, 데이터분석도 되고, 어지간한 것 다 할 수 있는 요.대.세 언어이다. 
JS, Python이 요.대.세 언어인 것 같다 비전공자라 잘은 모르지만 

파이썬에는 복소수도 지원 한다 
조건문 if 
```
if a > 1:
...     print("a is greater than 1");
...
a is greater than 1
Q 궁금한 점 뒤에 한 줄 ... 이건 뭐지? 엔터 입력후 바로 실행이 안되고 한 번 더 눌러야 되는 건 뭘까?

파이썬은 들여쓰기가 중요하다 (개인적으로는 블락이 있는게 더 좋은데 구분이 잘 가는 것 같은데 편할 것 같으면서도 아직 잘 모르겠다)

:그리고 요거 중요 블락을 시작한다는 의미  

반복문 for 
>>> for a in [1,2,3]:
...     print(a)
...
1
2
3
정말 직관적이다 for a in 배열 ! 좋은데:D 
>>> i=0
>>> while i<3:
...     i=i+1
...     print(i)
...
1
2
3
Q i++이 파이썬은 안되나?...
http://hashcode.co.kr/questions/277/%ED%95%98%EA%B8%B0
없다고 한다 i+=1을 쓰세요 :D 
함수는  def로 정의하는 구나 
>>> def sum(a,b):
...     return a+b
...
>>> print(sum(3,4))
7

```

## 자료형 

> 넘버

* 정수 
* 실수 
* 복소수 
* 8진수
* 16진수

정수, 실수는 우리가 아는 것 처럼 쓰면 되고 8진수, 16진수도 검색 or 맞춰서
사칙연산에서도 특별히 알아야 되는 것은 없다 JS랑 같다. 추가적으로 `**` 이 것이 x^y할 때 승을 쓸 때 곱하기 두번을 쓴다. `//` 몫만 취할 때 정수형 나누기 연산으로 생각하면 되겠다.

> 문자열 

문자열도 같고 
멀티라인은 3개로 표시한다. 자바스크립트 백틱이 따음표나 큰 따음표 3개 
이스케이프 코드 줄바꿈 따음표 말고는 써본적이 없지만...:D 

문자열 연산도 JS와 같다 더하면 합쳐진다 
곱하면 반복 

boilerPlate ...문자열  주석? 나중에 만들어보기 

* 문자열 인덱싱과 슬라이싱
문자열도 문자의 배열이라고 생각하면 쉽다. a[0] a[-1] 각 첫글자와 마지막 글자를 반환한다 길이는 a.length
자바스크립트 slice(0,4) -> 파이썬 a[0:4] 시작 자를 곳 끝에를 입력 안 하면 끝 값이 default, 시작번호는 0이 default
문자열과 튜플은 immutable이여서 새로운 배열을 만들어서(변경되지 않는 나머지) 복사해서 변경된 값을 넣어준다

* 문자열 포매팅 

문자열 포매팅 자바스크립트 `${}` 문자열 내에 변수 삽입
바로 대입시켜도 되고 변수로 대입해도 된다. 
%s 문자형 %d 숫자형, 2개 이상 값을 넣고 싶을 때는 % (,)로 여러개 넣어줄 수 있다.
`%%문자 그 자체 , %s 문자 %d 정수 %f 실수`리터럴은 포매팅 문자가 있을 때 `%` 문자를 쓰게 되는 경우 넣어준다.

`%10s % "hi"` 전체길이 10에 hi 오른쪽 정렬이 된다.
`%-10s % "hi"` 전체길이 10에 hi 오른쪽 정렬이 된다.
`%0.4f %3.42134234` 소수점 4자리까지
`%10.4f % 3.42134234` 전체길이 10에 소수점 4자리까지 

문자열 관련 함수들 
a.count('b')  b가 몇개 있는지 
a.find('b) 처음 나오는 위치 없으면 -1, JS index
파이썬은 index가 또 따로 있는데 find와 차이는 없으면 오류가 발생된다.
join 각각 삽입 upper 대문자, 소문자 lower, 공백지우기 strip  JS trim
특이하게 왼 , 오 lstrip, rstrip가 있다. 
replace (a,b) 바꿔준다 
split 나누기 a.split(나눌 기준)
나눈 값은 리스트에  

## ETC

* 종료할 떄 
Exit(), quit() 과 더블어서 단축키 종료도 있다 :D `CTRL+z or Ctrl+D or sys.exit()`


