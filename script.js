

let boxes=document.getElementsByClassName("square")
for(let box of boxes){
	box.addEventListener("mouseenter",()=>{
		for(item of boxes){
			if(box!==item)
			item.classList.add("active")
		}
	
	})

	box.addEventListener("mouseout",()=>{
		for(item of boxes){
			if(box!==item)
			item.classList.remove("active")
		}
		})
}