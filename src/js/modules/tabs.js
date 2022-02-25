const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
	const header = document.querySelector(headerSelector)
	const tab = document.querySelectorAll(tabSelector)
	const content = document.querySelectorAll(contentSelector)

	function hideContent() {
		content.forEach((item) => {
			item.style.display = 'none'

			tab.forEach((item) => {
				item.classList.remove(activeClass)
				item.classList.add('animated')
				item.classList.remove('pulse')
			})
		})
	}

	function showTabContent(i = 0) {
		content[i].style.display = 'block'
		tab[i].classList.add(activeClass)
		tab[i].classList.add('pulse')
	}

	hideContent()
	showTabContent()

	header.addEventListener('click', (e) => {
		const target = e.target
		if (
			target.classList.contains(tabSelector.replace(/\./, '')) ||
			target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
		) {
			tab.forEach((item, i) => {
				if (target === item || target.parentNode === item) {
					hideContent()
					showTabContent(i)
				}
			})
		}
	})
}

export default tabs
