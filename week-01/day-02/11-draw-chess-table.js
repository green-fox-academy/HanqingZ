// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

for(var i = 0; i < 6; i++){
    if(i % 2 == 0){
        console.log('% % % % ');
    }
    else{
        console.log(' % % % %');
    }
}