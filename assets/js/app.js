
 const cl = console.log;

 const btn = document.getElementById("btn")
 const box = document.getElementById("box")


// Event :- Whenever user intract with the webapplications this is called as event.

// 1. click :- 

const OnClick = (eve) =>{
    let visibleState = false;
    //1.  box.style.display = 'none'
    //2.if(visibleState === true){
    //     box.style.display = 'none';
    //     visibleState = false;
    // }else{
    //     visibleState = true;
    // }

    let classes = box.className;
    if(classes.includes('d-none')){
        box.classList.remove('d-none');
        eve.target.style.backgroundColor = '#1E90FF'
        btn.innerText = "OFF";
        // box.style.remove('box')
      
    }else{
        box.classList.add('d-none')
        btn.innerText = "ON";
        btn.style.backgroundColor = 'orange'
    }
}

 btn.addEventListener("click", OnClick)

// const OnbtnClick = (btn) =>{
//     let present = false;   
//     demo.style.display = "none"
//    if(present === true){
//     demo.style.display = "block"
//    }else{
//     demo.style.display = "none"
    
//    }


// 2. dbl Click :- dbl click event same as click event but we have click on dbl.


// const OnClick = (eve) =>{
//     let visibleState = false;
//     //1.  box.style.display = 'none'
//     //2.if(visibleState === true){
//     //     box.style.display = 'none';
//     //     visibleState = false;
//     // }else{
//     //     visibleState = true;
//     // }

//     let classes = box.className;
//     if(classes.includes('d-none')){
//         box.classList.remove('d-none');
//         eve.target.style.backgroundColor = '#1E90FF'
//         btn.innerText = "Hide";
//         box.style.remove('box')
      
//     }else{
//         box.classList.add('d-none')
//         btn.innerText = "Show";
//         btn.style.backgroundColor = 'orange'
      
//     }
// }


//  btn.addEventListener("dblclick", OnClick)

//3.  mouseenter :- 
//4. mouseleave :- 
const card = document.getElementById("card");
cl(card)

const onMouseEnter = (eve) =>{
    eve.target.style.backgroundColor = "blue";
    eve.target.style.borderRadius = "50%"
    eve.target.innerText = `*Blue`;
}

const onMouseleve = (eve) =>{
    eve.target.style.backgroundColor = "tomato";
    eve.target.style.backgroundColor = "0%";
    eve.target.innerText = ` *Red`;
       
}

card.addEventListener("mouseenter", onMouseEnter);
card.addEventListener("mouseleave", onMouseleve);

// img Task :- 

const img = document.getElementById("img");
cl(img)
const natureIMg = `https://images.unsplash.com/photo-1687800132770-8f1600a5849e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80`;
cl(natureIMg);
const cricketIMg = `https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`


const onmouseEnter = (eve) =>{
   let image = eve.target;
   cl(image)

   // getAttribute & setAttribute :- 

  cl(eve.target.getAttribute('alt'));
  (eve.target.setAttribute('alt','Nature'))


    let srcVal = eve.target.getAttribute("src");
    cl(srcVal)
    let changeVal = eve.target.setAttribute("src", natureIMg)
}

const onMouseLeave = (eve) =>{
    let srcVal = eve.target.setAttribute("src",cricketIMg);
}
img.addEventListener("mouseenter",onmouseEnter);
img.addEventListener("mouseleave",onMouseLeave)


// 5. mousemove :- 

const circle = document.getElementById("circle");

const onMousemove = (e) =>{
    this.target;
    cl(e)
    let green = e.offsetX;
    cl(green)
    let blue = e.offsetY;
    cl(blue)

    e.target.style.backgroundColor = `rgb(${100},${green},${blue})`;
    cl(e)

}

circle.addEventListener("mousemove", onMousemove)

// 6. focus & blur :- 

    const input = document.getElementById("input");
    // cl(input)
  
    const onFocus = (eve) =>{
        eve.target.value;
        cl(eve)
        eve.target.style.border = '3px solid red';
    }

    const onBlur = (eve) =>{
        eve.target.style.border = '1px solid #ced4da';
        cl(eve)
    }

    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur)
    
    // 7. keydown & keyup :- 

    const input1 = document.getElementById("input1");

    // const onKeydown = (e) =>{
    //     cl(e.target.value)
    //     e.target.style.backgroundColor = 'orange';
    // }    
    
    const onKeyup = (e) =>{
        e.target.style.backgroundColor = 'blue';
        cl(e.target.value)
    }

    // input1.addEventListener("keydown",onKeydown);
    input1.addEventListener("keyup",onKeyup)



    // 8. change event :- 

    const bgColor = document.getElementById("bgColor");
    cl(bgColor)
    const body = document.getElementById("body")


    const onChange = (e) =>{
            // cl(e.target.value) 
            let color = e.target.value;
            body.style.backgroundColor = color;     
            // bgColor.style.backgroundColor = color;     
    }   


    bgColor.addEventListener("change",onChange)


