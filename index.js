function getFirstSelector(selector){
  var elemen = document.querySelector(selector)
  return elemen
}

function nestedTarget(){
  var target = document.querySelector('#nested .target')
  return target
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list')

  for (var i = 0, l = lis.length; i < l; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
  return lis
}

function deepestChild(){
  var grand_node = document.querySelector('#grand-node div div div div')
  return grand_node
}
