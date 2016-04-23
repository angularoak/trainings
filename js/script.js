(function(){
function todo(){
     var task= 0;
     function work1(){
     task++;
         console.log("Work1 done "+task);
     } 
    function work2(){
     task++;
         console.log("Work2 done "+task);
     }
    return{
       job1:work1,
       job2:work2,
       job3:work2,
       job4:work2
        
      }
}
var todoTask= new todo();
todoTask.job1();
todoTask.job2();
todoTask.job3();
todoTask.job4();
}());
