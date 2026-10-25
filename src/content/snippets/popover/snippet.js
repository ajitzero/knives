const starIcon = document.querySelector('button > svg.lucide-star.knives-icon-fill');
const starButton = starIcon?.closest('button');
const starLabel = [...(starButton?.childNodes ?? [])].find(
	(node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
);

if (starIcon && starButton && starLabel) {
	starButton.addEventListener('click', () => {
		const active = starIcon.dataset.active === 'false';
		starIcon.dataset.active = String(active);
		starLabel.textContent = active ? 'Starred' : 'Star';
	});
}
