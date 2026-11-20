/*
 * Button affix demo helpers, one per hook: data-step buttons that step the
 * group's number input (the input's own step is the amount), data-reveal
 * toggling the input between password and text, data-clear emptying the
 * input and hiding itself while it is empty, and data-count mirroring the
 * input's length (maxlength does the capping).
 */
function stepButtons(group) {
	for (const button of group.querySelectorAll('[data-step]')) {
		button.addEventListener('click', () => {
			const input = group.querySelector('input');

			if (!input) return;

			const step = Number(input.step) || 1;
			let value = Number(input.value) + Number(button.dataset.step) * step;

			if (input.min !== '') value = Math.max(value, Number(input.min));
			if (input.max !== '') value = Math.min(value, Number(input.max));

			input.value = String(value);
		});
	}
}

function revealButton(group) {
	const button = group.querySelector('[data-reveal]');

	if (!button) return;

	button.addEventListener('click', () => {
		const input = group.querySelector('input');

		if (!input) return;

		input.type = input.type === 'password' ? 'text' : 'password';

		// toggleAttribute, not the hidden property: SVG elements have no
		// hidden property, so setting it is a silent no-op.
		for (const icon of button.querySelectorAll('svg')) {
			icon.toggleAttribute('hidden');
		}

		button.setAttribute('aria-label', input.type === 'password' ? 'Show password' : 'Hide password');
	});
}

function clearButton(group) {
	const button = group.querySelector('[data-clear]');

	if (!button) return;

	const input = group.querySelector('input');
	const update = () => {
		button.hidden = input?.value === '';
	};

	button.addEventListener('click', () => {
		if (!input) return;

		input.value = '';
		input.focus();
		update();
	});

	input?.addEventListener('input', update);
	update();
}

function countSuffix(group) {
	const counter = group.querySelector('[data-count]');

	if (!counter) return;

	const input = group.querySelector('input');
	const update = () => {
		counter.textContent = `${input?.value.length ?? 0} / ${input?.maxLength ?? ''}`;
	};

	input?.addEventListener('input', update);
	update();
}

for (const group of document.querySelectorAll('[data-input-group]')) {
	stepButtons(group);
	revealButton(group);
	clearButton(group);
	countSuffix(group);
}
