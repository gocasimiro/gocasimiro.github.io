const themeToggler = () => {
	const dark = () => {
		document.body.style.background = 'black'
		document.body.style.color = 'white'
	}
	const light = () => {
		document.body.style.background = 'white'
		document.body.style.color = 'black'
	}

	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		dark()
	} else {
		light()
	}

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', () => {
			themeToggler()
		})
}

const contactor = () => {
	const toggler = () =>
		(document.querySelector('ul').style.display = 'inline-block')
	document.querySelector('h4').addEventListener('mouseenter', () => {
		toggler()
	})
	document.querySelector('h4').addEventListener('touchstart', (event) => {
		event.preventDefault()
		toggler()
	})
}

const titleChanger = () => {
	if (window.document.readyState) document.title = 'boy, that was fast 😮‍💨'
	setTimeout(() => (document.title = "who's gocas?"), 1850)
}

titleChanger()
contactor()
themeToggler()
