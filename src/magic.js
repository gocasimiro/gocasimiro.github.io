let papo = null
let speech = null
let bateuCracha = 0
let fala = navigator.language.includes('en') ? 'en' : 'br'

const climinha = () => {
	const html = document.documentElement
	const escuro = () => {
		html.style.background = 'black'
		html.style.color = 'white'
	}
	const claro = () => {
		html.style.background = 'white'
		html.style.color = 'black'
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
			climinha()
		})
}

const legaliza = () => {
	const puxaOPano = (elemento, propriedade, valor) =>
		(document.querySelector(elemento).style[propriedade] = valor)

	document.querySelector('h4').addEventListener('mouseenter', () => {
		puxaOPano('ul', 'display', 'inline-block')
	})
	document.querySelector('h4').addEventListener('touchstart', (event) => {
		event.preventDefault()
		puxaOPano('ul', 'display', 'inline-block')
	})

	document.getElementById('why_cta').addEventListener('click', () => {
		puxaOPano('#why', 'display', 'block')
		puxaOPano('body', 'height', 'auto')
	})
	document
		.getElementById('why_cta')
		.addEventListener('touchstart', (event) => {
			event.preventDefault()
			puxaOPano('#why', 'display', 'block')
			puxaOPano('body', 'height', 'auto')
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

const vamoDarUmaChegadaLa = async () => {
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

	document.documentElement.setAttribute('lang', idioma)

	document.getElementById('title').innerText = blah.title
	document.getElementById('developer').innerText = blah.developer
	document.getElementById('designer').innerText = blah.designer
	document.getElementById('maker').innerText = blah.maker

	document.getElementById('developer').title = blah.developer_hover
	document.getElementById('designer').title = blah.designer_hover
	document.getElementById('maker').title = blah.maker_hover

	document.getElementById('cta').innerText = blah.cta
	document.getElementById('why_cta').innerText = blah.why_cta
	document.getElementById('why').innerText = blah.why

	cagueta(blah.console_warn)
}

const avisoAosNavegantes = () => {
	if (window.document.readyState) document.title = 'tem trapaça 👀'
	setTimeout(() => (document.title = 'gocasimiro.com'), 1850)
}

const bataOPenalti = async () => {
	climinha()
	await vamoDarUmaChegadaLa()
	euVouFalarTuVaiDeTradutor(fala)
	legaliza()
	avisoAosNavegantes()
}

bataOPenalti()

// Com amor, Gui Casimiro. 🤍
