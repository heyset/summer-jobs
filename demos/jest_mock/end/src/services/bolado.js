const video = {
  titulo: 'paulo cantando crawling in my skin',
  play: () => 'CRAWLINNG INNNNN MY SKINNNNNNNNNNN.. THEESE WOOOUNDSSS THEY WILLLL NOT HEALLLLL',
}

const { titulo } = video;

console.log(titulo);

const otoVideo = video;

otoVideo.titulo = 'denis vestido de pikachu';
console.log(otoVideo.titulo);

console.log(video.titulo);


console.log('wtf');
