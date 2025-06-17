document.addEventListener('DOMContentLoaded', function() {
    const collapsibleButton = document.querySelector('.collapsible-button');
    const collapsibleContent = document.querySelector('.collapsible-content');

    if (collapsibleButton && collapsibleContent) {
        collapsibleButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            this.setAttribute('aria-expanded', String(!isExpanded));

            if (isExpanded) {
                collapsibleContent.setAttribute('hidden', '');
                collapsibleContent.classList.remove('is-expanded');
                this.textContent = 'Read More';
            } else {
                collapsibleContent.removeAttribute('hidden');
                collapsibleContent.classList.add('is-expanded');
                this.textContent = 'Show Less';
            }
        });
    }
});
