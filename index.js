var n = document.querySelectorAll(".al").length;
for(var i=0; i<n; i++)
{
document.querySelectorAll(".al")[i].addEventListener("click", function()
{
    var m = this.innerHTML;
switch(m)
{
    case "A" :var audio = new Audio ("./audio/A.wav");
    audio.play();
    break;
    
    case "B" :var audio = new Audio ("./audio/b.mp3");
    audio.play();
    break;
    
    case "C" :var audio = new Audio ("./audio/c.mp3");
    audio.play();
    break;
    
    case "D" :var audio = new Audio ("./audio/d.mp3");
    audio.play();
    break;
    
    case "E" :var audio = new Audio ("./audio/e.mp3");
    audio.play();
    break;
    
    case "F" :var audio = new Audio ("./audio/f.mp3");
    audio.play();
    break;
    
    case "G" :var audio = new Audio ("./audio/g.mp3");
    audio.play();
    break;
    
    case "H" :var audio = new Audio ("./audio/h.mp3");
    audio.play();
    break;
    
    case "I" :var audio = new Audio ("./audio/i.mp3");
    audio.play();
    break;
    
    case "J" :var audio = new Audio ("./audio/j.mp3");
    audio.play();
    break;
    
    case "K" :var audio = new Audio ("./audio/k.mp3");
    audio.play();
    break;
    
    case "L" :var audio = new Audio ("./audio/l.mp3");
    audio.play();
    break;
    
    case "M" :var audio = new Audio ("./audio/m.mp3");
    audio.play();
    break;
    
    case "N" :var audio = new Audio ("./audio/n.mp3");
    audio.play();
    break;
    
    case "O" :var audio = new Audio ("./audio/o.mp3");
    audio.play();
    break;
    
    case "P" :var audio = new Audio ("./audio/p.mp3");
    audio.play();
    break;
    
    case "Q" :var audio = new Audio ("./audio/q.mp3");
    audio.play();
    break;
    
    case "R" :var audio = new Audio ("./audio/r.mp3");
    audio.play();
    break;
    
    case "S" :var audio = new Audio ("./audio/s.mp3");
    audio.play();
    break;
    
    case "T" :var audio = new Audio ("./audio/t.mp3");
    audio.play();
    break;
    
    case "U" :var audio = new Audio ("./audio/u.mp3");
    audio.play();
    break;
    
    case "V" :var audio = new Audio ("./audio/v.mp3");
    audio.play();
    break;
    
    case "W" :var audio = new Audio ("./audio/w.mp3");
    audio.play();
    break;
    
    case "X" :var audio = new Audio ("./audio/x.mp3");
    audio.play();
    break;
    
    case "Y" :var audio = new Audio ("./audio/y.mp3");
    audio.play();
    break;
    
    case "Z" :var audio = new Audio ("./audio/z.mp3");
    audio.play();
    break;
}
Keyboard(m);
});

}
document.addEventListener("keydown", function(t){
 keyboard(t.key);
});
function keyboard(key){
    switch(key)
    {
    case "a" :var audio = new Audio ("./audio/A.wav");
    audio.play();
    break;
    
    case "b" :var audio = new Audio ("./audio/b.mp3");
    audio.play();
    break;
    
    case "c" :var audio = new Audio ("./audio/c.mp3");
    audio.play();
    break;
    
    case "d" :var audio = new Audio ("./audio/d.mp3");
    audio.play();
    break;
    
    case "e" :var audio = new Audio ("./audio/e.mp3");
    audio.play();
    break;
    
    case "f" :var audio = new Audio ("./audio/f.mp3");
    audio.play();
    break;
    
    case "g" :var audio = new Audio ("./audio/g.mp3");
    audio.play();
    break;
    
    case "h" :var audio = new Audio ("./audio/h.mp3");
    audio.play();
    break;
    
    case "i" :var audio = new Audio ("./audio/i.mp3");
    audio.play();
    break;
    
    case "j" :var audio = new Audio ("./audio/j.mp3");
    audio.play();
    break;
    
    case "k" :var audio = new Audio ("./audio/k.mp3");
    audio.play();
    break;
    
    case "l" :var audio = new Audio ("./audio/l.mp3");
    audio.play();
    break;
    
    case "m" :var audio = new Audio ("./audio/m.mp3");
    audio.play();
    break;
    
    case "n" :var audio = new Audio ("./audio/n.mp3");
    audio.play();
    break;
    
    case "o" :var audio = new Audio ("./audio/o.mp3");
    audio.play();
    break;
    
    case "p" :var audio = new Audio ("./audio/p.mp3");
    audio.play();
    break;
    
    case "q" :var audio = new Audio ("./audio/q.mp3");
    audio.play();
    break;
    
    case "r" :var audio = new Audio ("./audio/r.mp3");
    audio.play();
    break;
    
    case "s" :var audio = new Audio ("./audio/s.mp3");
    audio.play();
    break;
    
    case "t" :var audio = new Audio ("./audio/t.mp3");
    audio.play();
    break;
    
    case "u" :var audio = new Audio ("./audio/u.mp3");
    audio.play();
    break;
    
    case "v" :var audio = new Audio ("./audio/v.mp3");
    audio.play();
    break;
    
    case "w" :var audio = new Audio ("./audio/w.mp3");
    audio.play();
    break;
    
    case "x" :var audio = new Audio ("./audio/x.mp3");
    audio.play();
    break;
    
    case "y" :var audio = new Audio ("./audio/y.mp3");
    audio.play();
    break;
    
    case "z" :var audio = new Audio ("./audio/z.mp3");
    audio.play();
    break;
}

}