const faloComQuem = () =>
	navigator.language.includes('pt')
		? '🇧🇷'
		: navigator.language.includes('en')
		? '🇺🇸'
		: navigator.language.includes('es')
		? '🇪🇸'
		: navigator.language.includes('zh')
		? '🇨🇳'
		: '🇧🇷'
let papo = null,
	speech = null,
	hablas = null,
	mandarim = null,
	bateuCracha = 0,
	fala = faloComQuem()
const climinha = () => {
	const e = document.documentElement,
		t =
			document.querySelector('meta[name="theme-color"]') ||
			(() => {
				const e = document.createElement('meta')
				return (
					e.setAttribute('name', 'theme-color'),
					document.head.appendChild(e),
					e
				)
			})()
	const n = () => {
			;(e.style.background = 'black'),
				(e.style.color = 'white'),
				t.setAttribute('content', 'black')
		},
		o = () => {
			;(e.style.background = 'white'),
				(e.style.color = 'black'),
				t.setAttribute('content', 'white')
		}
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
		? n()
		: o(),
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', climinha)
}
const legaliza = () => {
	const e = (e, t, n) => (document.querySelector(e).style[t] = n)
	document.querySelector('h4').addEventListener('mouseenter', () => {
		e('ul', 'display', 'inline-block')
	}),
		document.querySelector('h4').addEventListener('touchstart', (t) => {
			t.preventDefault(), e('ul', 'display', 'inline-block')
		}),
		document.getElementById('why_cta').addEventListener('click', () => {
			const t = document.getElementById('why').style.display === 'block'
			e('#why', 'display', t ? 'none' : 'block'),
				e('body', 'height', t ? '100%' : 'auto')
		}),
		document.getElementById('why_cta').addEventListener('touchstart', (t) => {
			t.preventDefault()
			const n = document.getElementById('why').style.display === 'block'
			e('#why', 'display', n ? 'none' : 'block'),
				e('body', 'height', n ? '100%' : 'auto')
		})
}
const cagueta = (e) => {
	if (bateuCracha > 0) return console.clear(), void console.info(e)
	;(window.dataLayer = window.dataLayer || []),
		window.dataLayer.push(['js', new Date()]),
		window.dataLayer.push(['config', 'G-BGD2SRPC8F']),
		console.info(e),
		bateuCracha++
}
const vamoDarUmaChegadaLa = async () => {
	const e = async (e) => {
		try {
			const t = await fetch(e)
			if (!t.ok)
				throw new Error(
					`Qual é, João?! Tu fala inglês porra nenhuma!: ${t.status}`
				)
			return t.json()
		} catch (t) {
			console.error('Esse cara mandou eu me fuder, véio!', t)
		}
	}
	try {
		const [t, n, o, zh] = await Promise.all([
			e('./src/languages/br.json'),
			e('./src/languages/en.json'),
			e('./src/languages/es.json'),
			e('./src/languages/zh.json'),
		])
		;(papo = t), (speech = n), (hablas = o), (mandarim = zh)
	} catch (e) {
		console.error('Não teve conversa :/', e)
	}
}
const avisoAosNavegantes = (e) => {
	window.document.readyState && (document.title = e),
		setTimeout(() => (document.title = 'gocasimiro.com'), 1850)
}
const euVouFalarTuVaiDeTradutor = (e = '🇧🇷') => {
	let t =
		e === '🇧🇷'
			? papo
			: e === '🇺🇸'
			? speech
			: e === '🇪🇸'
			? hablas
			: e === '🇨🇳'
			? mandarim
			: null
	document.documentElement.setAttribute('lang', e),
		(document.getElementById('title').innerText = t.title),
		(document.getElementById('developer').innerText = t.developer),
		(document.getElementById('designer').innerText = t.designer),
		(document.getElementById('maker').innerText = t.maker),
		(document.getElementById('developer').title = t.developer_hover),
		(document.getElementById('designer').title = t.designer_hover),
		(document.getElementById('maker').title = t.maker_hover),
		(document.getElementById('cta').innerText = t.cta),
		(document.getElementById('why_cta').innerText = t.why_cta),
		(document.getElementById('why').innerText = t.why),
		(document.getElementById(
			'mail'
		).href = `mailto:gocasimiro@gmail.com?subject=${t.mail}`),
		avisoAosNavegantes(t.trick),
		cagueta(t.console_warn)
}
const aChinelaVaiCantar = () => {
	const e = (e, t) => {
		document.getElementById(e).addEventListener('click', () => t(e))
	}
	e('🇺🇸', euVouFalarTuVaiDeTradutor),
		e('🇧🇷', euVouFalarTuVaiDeTradutor),
		e('🇪🇸', euVouFalarTuVaiDeTradutor)
	e('🇨🇳', euVouFalarTuVaiDeTradutor)
}
const bataOPenalti = async () => {
	climinha(),
		await vamoDarUmaChegadaLa(),
		aChinelaVaiCantar(),
		euVouFalarTuVaiDeTradutor(fala),
		legaliza()
}
bataOPenalti()
