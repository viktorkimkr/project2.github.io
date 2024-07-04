document.getElementById('box1').onclick = function(){
  document.querySelector('#cat').src = "https://avatars.mds.yandex.net/i?id=94bedd706dff441bddf9ceb254775713679d011d-12529201-images-thumbs&n=13";
  main.innerHTML = 'YAAAY';

  document.getElementById('box1').remove(); // Удалить элемент box1
  document.getElementById('box2').remove(); // Удалить элемент box2
///box1.style.MarginTop = '20px';
  ///body.style.color = 'DarkOrchid'
}

document.getElementById('box2').addEventListener('mouseover', function() {
  let maxX = window.innerWidth - this.offsetWidth;
  let maxY = window.innerHeight - this.offsetHeight;
  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);
  this.style.left = randomX + 'px';
  this.style.top = randomY + 'px';
  this.style.position = 'absolute';
});

document.getElementById('box2').onclick = function(){
  alert('иди в очко')
}