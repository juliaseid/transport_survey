var cleanT = ["bike", "carpool", "walk", "bus", "train", "streetcar", "skateboard", "rollerblade", "scooter"]
var dirtyT = ["car", "taxi", "rideshare"]
var userArray = [];
var userClean = [];
var userDirty = [];


function compareC (arr1, arr2){
arr1.forEach((e1)=>arr2.forEach((e2)=>{
  if(e1 === e2){
    userClean.push(e1);
    console.log(e1);
    
  }
}));
return userClean
}

function compareD (arr1, arr2){
arr1.forEach((e1)=>arr2.forEach((e2)=> {
  if(e1 === e2){
    userDirty.push(e1);
  }
}));
return userDirty
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
   
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });

    //compare userArray to cleanT; forEach e in userArray, if e===any e in cleanT, .push to userCleanT
    compareC(userArray, cleanT);
    compareD(userArray, dirtyT);
    console.log(cleanT);
    
    $('#transportation_survey').hide();

    if(userClean.length >= userDirty.length){
      $("#clean-output").show();
    } else{
      $("#dirty-output").show();
    }
  });
});

//Take user input, .push into two seperate arrays, get the length of those arrays, and then use them as value to compare.
//Campare the lengths of the arrays in if else{} statements. Print out different text based on the arrays.length