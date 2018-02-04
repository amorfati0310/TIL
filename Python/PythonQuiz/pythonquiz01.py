# 1. palindrome

# 앞에서 부터 읽어도 
# 뒤에서 부터 읽어도 같은 문제를 palindrome, 즉 회문이라고 합니다
# 다음 문자들이 회문인지 아닌지 판별하는 코드를 작성해보세요

# 1. Anna
# 2. Radar
# 3. Step on no Pets
# 4. No lemon, no melon

# https://stackoverflow.com/questions/8270092/python-remove-all-whitespace-in-a-string

""""
def isPalindrome(text):
    lowertext = text.lower()
    withoutWhiteSpace = "".join(lowertext.split())
    reverse = withoutWhiteSpace[::-1]
    print(withoutWhiteSpace)
    print(reverse)
    if reverse == withoutWhiteSpace:
        print('I am Palindrome')
    else:
        print('I am not a Palindrome')

""""

2. 다음과 같은 리스트를 90도 회전 시키는 코드를 작성하세요.

[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

[[7, 4, 1],
{8, 5, 2],
[9, 6, 3]]

(어떤 3x3리스트를 넣어도 우측으로 90도 회전시켜야 합니다.)