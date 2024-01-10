const content = document.querySelector(".content")
const form = document.querySelector(".form")
const input = document.querySelector(".value")
let arr = JSON.parse(localStorage.getItem("store")) || []

form.addEventListener("submit",(e)=>{
	e.preventDefault()
	call()
})


function call() {
	if (input.value==="") alert("fill in tha box")
	else{
	const ids = arr.length ? arr[arr.length-1].id+1 : 1
	const a = {id:ids,value:input.value}
	arr.push(a)
	localStorage.setItem("store",JSON.stringify(arr))
	content.innerHTML=""
	input.value=""
	display()
	}
}


function display() {
	content.innerHTML=""
	arr.map((e)=>{
		content.innerHTML+=`
		<div class="row1 align-items-center mt-2">
			<div class="col-2 text-center">
				<i class="bi bi-trash fs-2 delete text-danger" onClick="Hand(${e.id})" style="cursor:pointer"></i>
				<h6 class="text-danger delete" onClick="Hand(${e.id})" style="cursor:pointer">Delete</h6>
			</div>
			<div class="col-8 text-center">
				<h1>${e.value}</h1>
			</div>
			<div class="col-2 text-center">
				<i class="bi bi-pencil-square fs-2 edit text-warning" onClick="Sand(${e.id})" style="cursor:pointer"></i>
				<h6 class="text-warning edit" onClick="Sand(${e.id})" style="cursor:pointer">Edit</h6>
			</div>
		</div>
		`
	})
}

display()


function Hand(id) {
	arr = arr.filter(e=>e.id!==id)
	localStorage.setItem('store',JSON.stringify(arr))
	display()
}

function Sand(id) {
	const a = arr.find(e=>e.id===id)
	input.value = a.value
	arr = arr.filter(e=>e.id!==id)
	localStorage.setItem('store',JSON.stringify(arr))
	display()
}