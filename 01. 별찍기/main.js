//
for(var star=1; star<=5; star++) {
    console.log('*'.repeat(star));  // repeat(param) : param 만큼 반복
}
// *
// **
// ***
// ****
// *****

//
for(var star=5; star>=1; star--) {
    console.log('*'.repeat(star));
}
// *****
// ****
// ***
// **
// *

//
for(var star=5; star>=1; star--) {
    console.log(' '.repeat(5-star) + '*'.repeat(star));
}
// *****
//  ****
//   ***
//    **
//     *

//
for(var star=5; star>=1; star--) {
    console.log(' '.repeat(5-star) + '*'.repeat(2*star -1));
}
for(var star=9; star>=1; star-=2) {
    console.log(' '.repeat((9-star) / 2) + '*'.repeat(star));
}
// *********
//  *******
//   *****
//    ***
//     *

//
for(var star=9; star>=1; star-=2) {
    if(star>5) {
        console.log(' '.repeat((star - 5) / 2) + '*'.repeat(9 - star + 1));
    } else {
        console.log(' '.repeat((5 - star) / 2) + '*'.repeat(star));
    }
}
//   *
//  ***
// *****
//  ***
//   *