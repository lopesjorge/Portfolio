// const modal = document.getElementById('myModal'); 
// const btn = document.getElementById("sized");
// const span = document.getElementsByClassName("close")[0];
    
// btn.onclick = function() {
//     modal.style.display = "block";
//     };

// span.onclick = function() {
//     modal.style.display = "none";
// };

// window.onclick = function(event) {
// if (event.target == modal) {
//     modal.style.display = "none";
//     }
// }

const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'block'
    }
  }
  
  const btn = document.querySelector('.modalBtn')
  const btnClose = document.querySelector('.btnClose')
  btn.addEventListener('click', switchModal)
  btnClose.addEventListener('click', switchModal)

  
  window.onclick = function(event) {
      const modal = document.querySelector('.modal')
    if (event.target == modal) {
      switchModal()
    }
  }