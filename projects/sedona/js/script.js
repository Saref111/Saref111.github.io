var showSearchButton = document.querySelector("#search-open-button");
var searchHotelArea = document.querySelector("#hotel-search-area");
var searchForm = searchHotelArea.querySelector("#hotel-search-form");
var arrivingDate = searchForm.querySelector("#arriving-time");
var departureDate = searchForm.querySelector("#departure-time");
var adults = searchForm.querySelector("#adults-quantity");
var kids = searchForm.querySelector("#kids-quantity");
var adultsMinus = searchForm.querySelector("#adults-button-minus");
var adultsPlus = searchForm.querySelector("#adults-button-plus");
var kidsMinus = searchForm.querySelector("#kids-button-minus");
var kidsPlus = searchForm.querySelector("#kids-button-plus");

showSearchButton.addEventListener("click", function(evt){
  evt.preventDefault();
  searchHotelArea.classList.remove("search-area-error");
  searchHotelArea.classList.toggle("search-area-hide");
});

adultsMinus.addEventListener("click", function(evt){
  evt.preventDefault();
  adults.value -= 1;
  if(adults.value < 0){
    adults.value = 0;
  }
});

adultsPlus.addEventListener("click", function(evt){
  evt.preventDefault();
  adults.value++;
});

kidsMinus.addEventListener("click", function(evt){
  evt.preventDefault();
  kids.value -= 1;
  if(kids.value < 0){
    kids.value = 0;
  }
});

kidsPlus.addEventListener("click", function(evt){
  evt.preventDefault();
  kids.value++;
});

searchForm.addEventListener("submit", function(evt){
  if(arrivingDate.value == "" || departureDate.value == "" || adults.value == "" || kids.value == "" || (adults.value == 0 && kids.value == 0 )){
    evt.preventDefault();
    searchHotelArea.classList.remove("search-area-error");
    searchHotelArea.offsetWidth = searchHotelArea.offsetWidth;
    searchHotelArea.classList.add("search-area-error");
    }
});
//
