var likebutton = document.getElementsByClassName('_ebwb5')[0];
var HeartIcon = likebutton.childNodes;
var count = 1

function likePost(){
  likebutton.click();
};

function nextPost(){
  var nextbutton = document.getElementsByClassName('coreSpriteRightPaginationArrow')[0];
  nextbutton.click();
};

function likeMachine(){

  var notLiked = $(HeartIcon).hasClass("coreSpriteHeartOpen");

  if (notLiked === true) {
    likePost();
    console.log("Bild",count,"geliked")
    count++;

  }else{
    nextPost();
  };

};



for(c = 0; c < 500; c++){
    setTimeout(function(){
      likeMachine();
    }, c * 3000);
};