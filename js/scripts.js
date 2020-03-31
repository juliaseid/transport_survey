var cleanT = ["bike", "carpool", "walk", "bus", "train", "streetcar", "skateboard", "rollerblade", "scooter"]
var dirtyT = ["car", "taxi", "rideshare"]

function compare (arr1, arr2, arr3){
const userClean [];
const userDirty [];

arr1.forEach((e1)=>arr2.forEach((e2)=>{
  if(e1 === e2){
    userClean.push(e1);
  }
}

arr1.forEach((e1)=>arr3.forEach((e3)=> {
  if(e1 === e3){
    userDirty.push(e1);
  }
}
));
}

$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
      $(userArray).push(workTransportationMode);
    });
    //.push(userArray)
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });

    //compare userArray to cleanT; forEach e in userArray, if e===any e in cleanT, .push to userCleanT
    compare(userArray, cleanT, dirtyT);
    $('#transportation_survey').hide();

    if(userClean.length > userDirty.length){
      $("#clean-output").show();
    } else{
      $("#dirty-output").show();
    }
  });
});

//Take user input, .push into two seperate arrays, get the length of those arrays, and then use them as value to compare.
//Campare the lengths of the arrays in if else{} statements. Print out different text based on the arrays.length