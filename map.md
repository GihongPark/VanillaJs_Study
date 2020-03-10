# map() - 배열을 새로운 배열로 반환

```javascript
const arr1 = [1,3,5,7];
const map1 = arr1.map(x => x * 2);

console.log(map1)   // [2,6,10,14]
```

## 파라미터
`arr.map(callback(value[, index, array])[, thisArg])`
### callback
* 새로운 배열을  생성하는 함수
    #### value
    * 배열의 요소 
    #### index
    * 배열의 요소의 인덱스
    #### array
    * map()을 호출한 배열
### thisArg
* **this**로 사용되는 값 ( 전달되지 않을 시, this값은 `undefined`)

## 리턴값
새로운 배열