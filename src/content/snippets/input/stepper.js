/*
 * Number stepper: each button steps the number input beside it.
 * data-step holds the direction; the input's own step is the amount.
 */
for (const button of document.querySelectorAll('[data-step]')) {
	button.addEventListener('click', () => {
		const input = button.parentElement?.querySelector('input[type="number"]');

		if (!input) return;

		const step = Number(input.step) || 1;
		let value = Number(input.value) + Number(button.dataset.step) * step;

		if (input.min !== '') value = Math.max(value, Number(input.min));
		if (input.max !== '') value = Math.min(value, Number(input.max));

		input.value = String(value);
	});
}
