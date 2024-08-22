const slides = Document.querySelecterAll(".slides")

var counter = 0;

slides.array.forEach((slide , index) => {
    slides.style.left = `$(index * 100)%`
    
});