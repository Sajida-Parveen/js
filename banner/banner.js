const sliders = document.querySelectorAll('.slider');
// console.log(sliders);
let counter =0;
 sliders.forEach(
    (slider, index)=>{
        slider.style.left = `${index *100}%`;
    }
 )
 const goPrev = ()=>{
    // alert()
    if(counter !=0){
        counter--;
        sliderImage();
    }
   
 }
 const goNext= () =>{
    if(counter < sliders.length-1)
    counter++;
    sliderImage();
 }

const sliderImage = () =>{
    sliders.forEach(
        (slider)=>{
            slider.style.transform = `translateX(-${counter *100}%)`;
        }
    )
}