let show=document.getElementsByClassName("bar-icon"),
menuLink=document.getElementsByClassName("menu-link");
let showMenu=function(){
    console.log("hi");
}
show[0].addEventListener("click",()=>{
    console.log("hi");
    let menu=document.getElementsByClassName("menu-show");
    menu[0].style.display="block";
})
for(i=0;i<menuLink.length;i++){
    menuLink[i].addEventListener("click",()=>{
        let menu=document.getElementsByClassName("menu-show");
        menu[0].style.display="none";
    })
}