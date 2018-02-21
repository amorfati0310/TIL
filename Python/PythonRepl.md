# 파이썬 기초 문제들을 풀며 문법적인 부분 및 새로 알게 된 사실 기록 


## For문 

```
for i in range(a,b+1):
  c.append(i)

print(" ".join(str(x) for x in c))

문자열로 합치기 
''.join(str(x) for x in c)

for x in list 
item하나씩 

자바스크립트에서 push -> python 에서는 append

range(a,b)
a~b까지  b는 불포함 ! 

for i in range(a, b + 1):
  print(i, end=' ')
줄바꿈 디폴트는 end=\n인데 조정가능 :D

for i in range(a, b - 1, -1):

range역순으로 할 때는 스탭을 역순으로 -1부터 


```


[파이썬_개념_사이트](https://snakify.org/lessons/sets/)


* Filter 

```
list(filter(lambda x: x == 0, b))

list method를 쓰겠다 그 안에서 filter,map,reduce 등등
lambda x: x 
해당 item을 -> lambda x: 로 맵핑해서 함수를 실행할 수 있다 :D  
list(filter)


print(len(c)) 
list 길이 len()

for i in range(int(input())):
  if int(input()) == 0:
    result += 1
print(result)

참고 바로 입력받는 부분에서 판별할 수도 :D 
```

```
n = int(input())

cards_sum = 0
for i in range(1, n + 1):
  cards_sum += i

for i in range(n - 1):
  cards_sum -= int(input())

print(cards_sum)

없는 것과 비교 
하나씩 비교를 했는데 ... 
총합과 비교를 해서 찾을 수 있었는데 아쉽 


s = input()
mid = (len(s) + 1) // 2
print(s[mid:] + s[:mid])

word1, word2 = input().split()
print(word2, word1)



얼마나 삽질을 했는지... 
find를 안 쓰고 ;;;
s = input()
result = []
for i in range(len(s)):
  if s[i]=='f':
    result.append(i)

if len(result) == 0:
  print(-1)
else:
  if(len(result)==1):
     print(result[0])
  else:
    print(result[0],result[len(result)-1],end=" ")

s = input()
if s.find('f') == s.rfind('f'):
  print(s.find('f'))
else:
  print(s.find('f'), s.rfind('f'))



s = input()
if s.find('p') == -1:
  print(-2)
elif s.find('p') == s.rfind('p'):
  print(-1)
else:
  a = s.find('p')
  b = s[a+1:]
  print(a+1+b.find('p'))
```
> 리스트 포문 
리스트 자체로 스텝 밟을 수 있다. + 리스트로 돌려서 각각 아이템으로 맵핑할 수 있음:D
```
for i in a[::2]:
  print(i, sep=' ')

```

> 파이썬 for else 

http://book.pythontips.com/en/latest/for_-_else.html
```
a = [int(s) for s in input().split()]
for i in range(1, len(a)):
  if a[i - 1] * a[i] > 0:
    print(a[i - 1], a[i])
    break
else:
  print(0)

```

그 이후를 할 필요 없는 경우 ! while문 안에 조건문을 escape 조건으로 지정!
```
while a % i != 0:
  i += 1
print(i)
```

리스트에서 최대값 그리고 인덱싱
```
print(max(a), a.index(max(a)))
```



> list 유일한 것 찾는 문제
```
a = [(s) for s in input().split()]
# Print a value:
for i in range(len(a)):
  uniq=0
  for j in range(len(a)):
    if uniq>1:
        break;
    if a[i]==a[j]:
        uniq+=1
  else:
    if uniq==1:
        print(a[i], end=" ")


내장 메소드에 카운트라는 메소드가 있음!:D
a = [int(s) for s in input().split()]
for i in a:
  if a.count(i) == 1:
    print(i, end=' ')        

```


> 최대값 갯수 

```
# Read an integer:
a = int(input())
max = 0
count = 1 
while a!= 0:
  if a>=max:
    if max==a:
      count+=1
    else:
      count = 1
    max = a
  a = int(input())
print(count)


maximum = int(input())
counter = 1
a = -1
while a != 0:
  a = int(input())
  if a > maximum:
    maximum, counter = a, 1
  elif a == maximum:
    counter += 1
print(counter)

```


> 같은 숫자 갯수 
```
a = int(input())
same_count = 1
count_max = 1
b = int(input())
while b != 0:
  if a == b:
    same_count+=1
    if count_max < same_count:
      count_max = same_count
  else:
    same_count = 1
  a = b
  b = int(input())
print(count_max)

next = int(input())
length = 1
max_length = 1
while next != 0:
  prev, next = next, int(input())
  if prev == next:
    length += 1
  else:
    length = 1
  max_length = max(length, max_length)
print(max_length)


 prev, next = next, int(input()) 순서 바꾸면서 input넣기 
 max함수 사용 !

```

피보나치 

```

n = int(input())
# n번 반복
i = 3
x = 1
y = 1
prev_p = 1
p = 1
if(n>=3):
  while(i<=n):
     x = y
     y = prev_p
     p = x+y
     prev_p = p
     i+=1
# Print a value:
print(p)

훨씬 깔끔 ...
반복을 이 만큼 해준다 
swap이 지원 되니까 포인터로 따로 지정할 필요가 없구나 !
prev, next = 1, 1
n = int(input())
for i in range(n - 2):
  prev, next = next, prev + next
print(next)
```

> 피보나치 인덱스 

```
n = int(input())
fb_idx = 1
find = 0
prev, next = 1,1
while next <= n:
  print('next,n',next,n)
  fb_idx +=1
  next, prev = next, next+prev
  print('next,n',next,n)
  if(next==n):
    find = 1
    break;
    
if find==1:
  print(fb_idx)
else:
  print(-1)


prev, next = 1, 1
index = 2
possible_fib = int(input())
while possible_fib > next:
  prev, next = next, prev + next
  index += 1
if possible_fib == next:
  print(index)
else:
  print(-1)


```