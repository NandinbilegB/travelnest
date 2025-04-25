const title = document.getElementById('review-title');
const images = document.querySelectorAll('.region-img');
const sections = document.querySelectorAll('.review-section');

images.forEach(img => {
  img.addEventListener('click', () => {
    const region = img.dataset.region;

    // Update title
    title.textContent = `Package Review – ${capitalize(region)} Region`;

    // Show only selected section
    sections.forEach(section => {
      section.classList.toggle('hidden', !section.id.startsWith(region));
    });

    // Highlight selected image
    images.forEach(i => i.classList.remove('selected'));
    img.classList.add('selected');
  });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
