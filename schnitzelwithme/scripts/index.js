window.onload = () => {
  generateToC();
};

function generateToC() {
  // Dynamically add ToC entries
  const tocList = document.getElementById("toc-list");
  const tocHeaders = document.querySelectorAll(".toc-entry > h2");
  tocHeaders.forEach(elements => {
    let name = elements.innerHTML;
    let link = elements.id;
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", `#${link}`);
    a.innerHTML = name;
    li.appendChild(a);
    tocList.appendChild(li);

    a = a.cloneNode(true);
    a.setAttribute("class", "hover-underline-animation");
  });

  // Dynamically add/remove "active" class to li element of ToC
  const tocEntries = document.querySelectorAll(".toc-entry");
  const tocEntry = (entries, observer) => {
    entries.forEach((entry) => {
      const headerId = entry.target.querySelector("h2").id;
      const tocListEntry = tocList.querySelector(`[href="#${headerId}"`);
      tocListEntry.parentElement.classList.remove("active");
      if (!entry.isIntersecting) return;
      tocListEntry.parentElement.classList.add("active");
    });
  };

  // Setup observer to check if any entry intersects with rootMargin
  const observer = new IntersectionObserver(tocEntry, {
    rootMargin: "-5% 0% -95% 0%"
  });
  tocEntries.forEach((tocEntries) => observer.observe(tocEntries));
}

function mobileDropdown() {
  document.getElementById("mobile-dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('i.mobile-dropdown-icon')) {
    var dropdowns = document.getElementsByClassName("mobile-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 