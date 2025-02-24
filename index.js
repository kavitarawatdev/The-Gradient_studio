// =================================================================
// CODE FOR background GRADIENT GENERATOR
// =================================================================
const bg_grad_cp_1=document.querySelector("#background-gradient-cp-1");
const bg_grad_cp_2=document.querySelector("#background-gradient-cp-2");
const bg_grad_direction=document.querySelector("#background-gradient-direction")
const bg_grad_output = document.querySelector(".background-gradient-section .output-box")
const bg_grad_inputs = document.querySelectorAll(".background-gradient-inputs input");

const bg_grad_code = document.querySelector(".background-gradient-section .code");
const updateBgGradient=()=> {
    bg_grad_output.style.background = `linear-gradient(${bg_grad_direction.value}, ${bg_grad_cp_1.value}, ${bg_grad_cp_2.value})`;
    bg_grad_code.textContent=`background:  linear-gradient(${bg_grad_direction.value},  ${bg_grad_cp_1.value},  ${bg_grad_cp_2.value}) ;`;
}

bg_grad_inputs.forEach(input=>{
    input.addEventListener("input",updateBgGradient)
})

const bg_grad_section = document.querySelector(".background-gradient-section")
const bg_grad_btns = document.querySelectorAll(".background-gradient-btns .btn")

bg_grad_btns.forEach((btn,i)=>{
    btn.addEventListener("click",(e)=>{
        if(i===0){
            console.log(i)
            bg_grad_direction.value="180deg";
            bg_grad_cp_1.value="#004e98";
            bg_grad_cp_2.value="#004e98";
            bg_grad_section.style.background="#00879E";
            updateBgGradient();
            
        }
        if(i===1) bg_grad_section.style.background=bg_grad_output.style.background;;
    })
})

// =================================================================
// CODE FOR BORDER RADIUS GENERATOR
// =================================================================
const border_output = document.querySelector(".border-radius-section .output-box");
const topLeftSlider = document.querySelector('#top-left-radius');
const topRightSlider = document.querySelector("#top-right-radius");
const bottomLeftSlider = document.querySelector("#bottom-left-radius");
const bottomRightSlider = document.querySelector("#bottom-right-radius");
const border_rad_inputs=document.querySelectorAll(".border-radius-section input");
const border_rad_code = document.querySelector(".border-radius-section .code");
const border_rad_btns = document.querySelector(".border-radius-btns .btn")

const updateBorderRadius=()=> {
  const tl = topLeftSlider.value + '%';
  const tr = topRightSlider.value + '%';
  const br = bottomRightSlider.value + '%';
  const bl = bottomLeftSlider.value + '%';

  border_output.style.borderTopLeftRadius = tl;
  border_output.style.borderTopRightRadius = tr;
  border_output.style.borderBottomRightRadius = br;
  border_output.style.borderBottomLeftRadius = bl;

  border_rad_code.textContent = `border-radius: ${tl} ${tr} ${br} ${bl};`;
}

border_rad_inputs.forEach((input)=>{
    input.addEventListener("input",updateBorderRadius)
})

border_rad_btns.addEventListener("click",(e)=>{
    topLeftSlider.value=topRightSlider.value=bottomLeftSlider.value=bottomRightSlider.value="0"
    updateBorderRadius()
})

// ======================================================================
// code for gradient text
// ======================================================================
const text_grad_cp_1=document.querySelector("#text-gradient-cp-1");
const text_grad_cp_2=document.querySelector("#text-gradient-cp-2");
const text_grad_direction=document.querySelector("#text-gradient-direction")
const text_grad_output = document.querySelector(".text-gradient-section .output-text")
const text_grad_inputs = document.querySelectorAll(".text-gradient-inputs input");

const text_grad_code = document.querySelector(".text-gradient-section .code");

const updateTextGradient=()=> {
    text_grad_output.style.backgroundImage = `linear-gradient(${text_grad_direction.value}, ${text_grad_cp_1.value}, ${text_grad_cp_2.value})`;
    text_grad_code.textContent=`background-clip: text;
                    -webkit-text-fill-color: transparent;
    background-image:  linear-gradient(${text_grad_direction.value},  ${text_grad_cp_1.value},  ${text_grad_cp_2.value}) ;`;
}

text_grad_inputs.forEach(input=>{
    input.addEventListener("input",updateTextGradient)
})

const text_grad_btns = document.querySelector(".text-gradient-btns .btn")
text_grad_btns.addEventListener("click",(e)=>{
    text_grad_cp_1.value=text_grad_cp_2.value="#000000"
    text_grad_direction.value="180deg"
    updateTextGradient()
})

// =========================================
// copy button functionality
// =========================================
const copy_btns =document.querySelectorAll(".fa-copy");
copy_btns.forEach((btn,i)=>{
    btn.addEventListener("click",(e)=>{
        copyToClipboard(i)
    })
})

const copyToClipboard=(i)=>{
    const copied_mess = document.createElement("span");
    copied_mess.classList.add("copied-message");
    if(i===0){
        navigator.clipboard.writeText(bg_grad_code.innerText);
        bg_grad_code.before(copied_mess);
    };
    if(i===1){
        navigator.clipboard.writeText(border_rad_code.innerText);
        border_rad_code.before(copied_mess);
    };
    if(i===2){
        navigator.clipboard.writeText(text_grad_code.innerText);
        text_grad_code.before(copied_mess);
    };
    copied_mess.innerText="copied";
    setTimeout(() => {
        copied_mess.remove()
    }, 1200);
}