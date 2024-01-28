# 스톱워치(바닐라 js)

시간이 표시되는 부분 : start, pause, stop 버튼

<hr>

![image](https://github.com/Jannyoon/stopWatch/assets/149743716/fd0056b8-b4c4-4dfd-ab2d-b5bdaf321877)

<hr>

### 사용자 경험
1. 재생 버튼 클릭 시 : startTimer 함수 호출
- startTimer 함수 : 1초 단위로 count를 + & showNowTime()
- showNowTime 함수 : 스톱워치 화면에 시:분:초 출력

2. 일시 정지 버튼 클릭 시 : stopTimer 함수 호출
stopTimer 함수 : clearInterval(timer)

3. 정지 버튼 클릭 시 : 스탑워치의 시간이 0으로 초기화된다.
스톱워치 화면 00:00:00 초기화
count = 0
stopTimer 함수 : clearInterval(timer)
