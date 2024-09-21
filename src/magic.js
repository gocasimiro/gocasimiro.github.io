let papo = null
let speech = null
let bateuCracha = 0

const climinha = () => {
	const escuro = () => {
		document.body.style.background = 'black'
		document.body.style.color = 'white'
	}
	const claro = () => {
		document.body.style.background = 'white'
		document.body.style.color = 'black'
	}

	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		escuro()
	} else {
		claro()
	}

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', () => {
			themeToggler()
		})
}

const legaliza = () => {
	const puxaOPano = (elemento, modificante) =>
		(document.querySelector(elemento).style.display = modificante)

	document.querySelector('h4').addEventListener('mouseenter', () => {
		puxaOPano('ul', 'inline-block')
	})
	document.querySelector('h4').addEventListener('touchstart', (event) => {
		event.preventDefault()
		puxaOPano('ul', 'inline-block')
	})

	document.getElementById('why_cta').addEventListener('click', () => {
		puxaOPano('#why', 'block')
	})
	document
		.getElementById('why_cta')
		.addEventListener('touchstart', (event) => {
			event.preventDefault()
			puxaOPano('#why', 'block')
		})
}

const cagueta = (consciente) => {
	if (bateuCracha > 0) {
		console.clear()
		console.info(consciente)
		return
	}
	window.dataLayer = window.dataLayer || []
	function gtag() {
		dataLayer.push(arguments)
	}

	gtag('js', new Date())
	gtag('config', 'G-BGD2SRPC8F')

	console.info(consciente)

	bateuCracha++
}

const vamoDarUmaChegadala = async () => {
	const pegaOPapo = async (path) => {
		try {
			const response = await fetch(path)
			if (!response.ok) {
				throw new Error(
					`Qual é, João?! Tu fala inglês porra nenhuma!: ${response.status}`
				)
			}
			return response.json()
		} catch (error) {
			console.error('Esse cara mandou eu me fuder, véio!', error)
		}
	}

	try {
		const [br, en] = await Promise.all([
			pegaOPapo('./src/languages/br.json'),
			pegaOPapo('./src/languages/en.json'),
		])
		papo = br
		speech = en
	} catch (error) {
		console.error('Não teve conversa :/', error)
	}
}

const euVouFalarTuVaiDeTradutor = (idioma = 'br') => {
	const blah = idioma === 'br' ? papo : speech

	document.getElementById('title').innerText = blah.title
	document.getElementById('developer').innerText = blah.developer
	document.getElementById('designer').innerText = blah.designer
	document.getElementById('maker').innerText = blah.maker
	document.getElementById('cta').innerText = blah.cta
	document.getElementById('why_cta').innerText = blah.why_cta
	document.getElementById('why').innerText = blah.why

	cagueta(blah.console_warn)
}

const bataOPenalti = async () => {
	climinha()
	await vamoDarUmaChegadala()
	euVouFalarTuVaiDeTradutor()
	legaliza()
}

bataOPenalti() // 🚀
