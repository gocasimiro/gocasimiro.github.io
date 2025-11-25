const faloComQuem = () => {
	if (navigator.language.includes('pt')) return '🇧🇷'
	if (navigator.language.includes('en')) return '🇺🇸'
	if (navigator.language.includes('es')) return '🇪🇸'
	if (navigator.language.includes('zh')) return '🇨🇳'
	return '🇧🇷'
}

let papo = null
let speech = null
let hablas = null
let mandarim = null
let bateuCracha = 0
let fala = faloComQuem()
window.cabeca = {
	foco: false,
}

const climinha = () => {
	const html = document.documentElement
	const glitch = document.querySelectorAll('.glitch')
	let tetinho = document.querySelector('meta[name="theme-color"]')

	if (!tetinho) {
		tetinho = document.createElement('meta')
		tetinho.setAttribute('name', 'theme-color')
		document.head.appendChild(tetinho)
	}

	const escuro = () => {
		html.style.background = 'black'
		Array.prototype.slice
			.call(glitch)
			.map((cada) => (cada.style.background = 'black'))
		html.style.color = 'white'
		tetinho.setAttribute('content', 'black')
	}
	const claro = () => {
		html.style.background = 'white'
		Array.prototype.slice
			.call(glitch)
			.map((cada) => (cada.style.background = 'white'))
		html.style.color = 'black'
		tetinho.setAttribute('content', 'white')
	}

  escuro()

  return

  // Tema claro desativado para melhor exibição da ascii art, talvez faça outra positiva
  
	/* if (
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
  */
}

const legaliza = () => {
	const puxaOPano = (elemento, propriedade, valor) =>
		(document.querySelector(elemento).style[propriedade] = valor)

	const botaOPano = puxaOPano

	document.querySelector('h4').addEventListener('mouseenter', () => {
		puxaOPano('ul', 'display', 'inline-block')
	})
	document.querySelector('h4').addEventListener('touchstart', (event) => {
		event.preventDefault()
		puxaOPano('ul', 'display', 'inline-block')
	})

	document.getElementById('why_cta').addEventListener('click', () => {
		if (document.getElementById('why').style.display === 'block') {
			botaOPano('#why', 'display', 'none')
			botaOPano('body', 'height', '100%')
			window.cabeca.foco = false
			return
		}
		puxaOPano('#why', 'display', 'block')
		puxaOPano('body', 'height', 'auto')
		window.cabeca.foco = true
	})
	document
		.getElementById('why_cta')
		.addEventListener('touchstart', (event) => {
			event.preventDefault()
			if (document.getElementById('why').style.display === 'block') {
				botaOPano('#why', 'display', 'none')
				botaOPano('body', 'height', '100%')
				return
			}
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
		const [br, en, es, zh] = await Promise.all([
			pegaOPapo('./src/languages/br.json'),
			pegaOPapo('./src/languages/en.json'),
			pegaOPapo('./src/languages/es.json'),
			pegaOPapo('./src/languages/zh.json'),
		])
		papo = br
		speech = en
		hablas = es
		mandarim = zh
	} catch (error) {
		console.error('Não teve conversa :/', error)
	}
}

const avisoAosNavegantes = (papo) => {
	if (window.document.readyState) document.title = papo
	setTimeout(() => (document.title = 'gocasimiro.com'), 1850)
}

const euVouFalarTuVaiDeTradutor = (idioma = '🇧🇷') => {
	let blah
	if (idioma === '🇧🇷') blah = papo
	if (idioma === '🇺🇸') blah = speech
	if (idioma === '🇪🇸') blah = hablas
	if (idioma === '🇨🇳') blah = mandarim

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
	document.getElementById(
		'mail'
	).href = `mailto:gocasimiro@gmail.com?subject=${blah.mail_subject}`
	document.getElementById(
		'whatsapp'
	).href = `https://wa.me/5511997787623?text=${blah.whats_subject}`

	document.getElementById('progress').children[0].innerText = blah.progress
	document.getElementById('courage').children[0].innerText = blah.courage
	document.getElementById('future').children[0].innerText = blah.future
	document.getElementById('create').children[0].innerText = blah.create

	document
		.getElementById('progress')
		.children[0].setAttribute('data-text', blah.progress)
	document
		.getElementById('courage')
		.children[0].setAttribute('data-text', blah.courage)
	document
		.getElementById('future')
		.children[0].setAttribute('data-text', blah.future)
	document
		.getElementById('create')
		.children[0].setAttribute('data-text', blah.create)

	avisoAosNavegantes(blah.trick)

	cagueta(blah.console_warn)
}

const whatDidHeSaid = euVouFalarTuVaiDeTradutor
const laPergunta = euVouFalarTuVaiDeTradutor

const aChinelaVaiCantar = () => {
	const vamoLaGalera = (flag, f) => {
		document.getElementById(flag).addEventListener('click', () => {
			f(flag)
		})
	}
	vamoLaGalera('🇺🇸', whatDidHeSaid) // Eles são grande
	vamoLaGalera('🇧🇷', euVouFalarTuVaiDeTradutor) // Mas nóis é ruim
	vamoLaGalera('🇪🇸', laPergunta) // Viva Latinoamerica
	vamoLaGalera('🇨🇳', euVouFalarTuVaiDeTradutor) // Tem que falar com todo mundo
}

const sustinho = async () => {
	const sustos = document.querySelectorAll('.glitch')
	const comeco = 4500
	const cada = 9000
	const boo = 777
	for (let i = 0; i < sustos.length; i++) {
		if (window.cabeca.foco === true) return

		const susto = sustos[Math.floor(Math.random() * sustos.length)]
		const quando = comeco + (i * cada + Math.random()) * 5000
		setTimeout(() => {
			susto.style.display = 'flex'
			setTimeout(() => {
				susto.style.display = 'none'
			}, boo)
		}, quando)
	}
}

const bataOPenalti = async () => {
	climinha()
	await vamoDarUmaChegadaLa()
	aChinelaVaiCantar()
	euVouFalarTuVaiDeTradutor(fala)
	legaliza()
	await sustinho() // Boo!
}

bataOPenalti()

// Com amor, Gui Casimiro. 🤍
