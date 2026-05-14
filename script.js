//your JS code here. If required.
 let boxes=document.getElementsByClass("square")
for(let box of boxes){
	box.addEventListener("mouseenter",()=>{
		for(item of boxes){
			if(box!==item)
			item.ClassList.add("active")
		}
	}
	})
 let boxes=document.getElementsByClass("square")
for(let box of boxes){
	box.addEventListener("mousein",()=>{
		for(item of boxes){
			if(box!==item)
			item.ClassList.remove("active")
	

