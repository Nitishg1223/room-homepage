var bckwrd=1;
var bckwrd=1;
var curr=1;
var idx=1;
$("button").click(function(){
if(idx%2==1)
{
  $(".brand-2").addClass("brand-hide");
  $(".brand-2").removeClass("brand-visible");
}
else{
  $(".brand-2").addClass("brand-visible");
  $(".brand-2").removeClass("brand-hide");

}
idx++;
});
$(".next-icon").click(function(event){


  $("#para-"+bckwrd).removeClass("para-visible");
  $("#para-"+bckwrd).addClass("para-hide");

    $("#background").removeClass("bg-"+bckwrd);

  bckwrd=(bckwrd+1)%3;
  if(bckwrd==0)
  bckwrd=3;
 curr=bckwrd;
  $("#para-"+bckwrd).removeClass("para-hide");
  $("#para-"+bckwrd).addClass("para-visible");
    $("#background").addClass("bg-"+bckwrd);
    console.log(bckwrd);


});
$(".prev-icon").click(function(event){


  $("#para-"+bckwrd).removeClass("para-visible");
  $("#para-"+bckwrd).addClass("para-hide");

  $("#background").removeClass("bg-"+bckwrd);
  bckwrd=(bckwrd-1)%3;
  if(bckwrd==0)
  bckwrd=3;

  $("#para-"+bckwrd).removeClass("para-hide");
  $("#para-"+bckwrd).addClass("para-visible");
    $("#background").addClass("bg-"+bckwrd);
  console.log(bckwrd);
});
