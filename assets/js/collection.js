$("#collection .btn-list .grid").on("click", function () {
  $("#collection .btn-list .grid i")[0].style.color = "black"
  $("#collection .btn-list .list i")[0].style.color = "#888"
  $("#collection .category #category-body")[0].style.opacity = "0"
  setTimeout(() => {
    $("#collection .category #category-body").removeClass("body-list")
    $("#collection .category #category-body").addClass("body-grid")
    $("#collection .category #category-body")[0].style.opacity = "1"
  }, 500);
})

$("#collection .btn-list .list").on("click", function () {
  $("#collection .btn-list .list i")[0].style.color = "black"
  $("#collection .btn-list .grid i")[0].style.color = "#888"
  $("#collection .category #category-body")[0].style.opacity = "0"
  setTimeout(() => {
    $("#collection .category #category-body").removeClass("body-grid")
    $("#collection .category #category-body").addClass("body-list")
    $("#collection .category #category-body")[0].style.opacity = "1"
  }, 500);
})