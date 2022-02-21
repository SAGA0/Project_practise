const modals = (modal) => {
	const modalTrigger = document.querySelector(modal)
	const trigger = document.querySelectorAll('.contact_us_wrap')
	const modalBlock = document.querySelector('.popup_engineer')
	const modalPopup = document.querySelector('.popup')
	const closePopup = document.querySelector('.popup .popup_close')
	const close = document.querySelector('.popup_engineer .popup_close')

	trigger.forEach((item) => {
		item.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault()
			}

			modalPopup.style.display = 'block'
			document.body.style.overflow = 'hidden'
		})
	})

	modalTrigger.addEventListener('click', (e) => {
		if (e.target.getAttribute('data-btn') === modalTrigger.dataset.btn) {
			modalBlock.style.display = 'block'
			document.body.style.overflow = 'hidden'
		}
	})

	close.addEventListener('click', () => {
		modalBlock.style.display = 'none'
		document.body.style.overflow = ''
	})

	closePopup.addEventListener('click', () => {
		modalPopup.style.display = 'none'
		document.body.style.overflow = ''
	})

	modalBlock.addEventListener('click', (e) => {
		if (e.target === modalBlock || e.target === modalPopup) {
			modalBlock.style.display = 'none'
			modalPopup.style.display = 'none'
			document.body.style.overflow = ''
		}
	})

	modalPopup.addEventListener('click', (e) => {
		if (e.target === modalPopup) {
			modalPopup.style.display = 'none'
			document.body.style.overflow = ''
		}
	})
}

export default modals
