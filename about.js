console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Form has been sumbitted successfully')
}

const picture = evt => {
	alert(`You're very awesome for looking at the cats, they're adorable. `)
}


let form = document.querySelector('#contact');
let pic = document.querySelector('img')

form.addEventListener('submit', handleSubmit);

pic.addEventListener('mouseover', picture)