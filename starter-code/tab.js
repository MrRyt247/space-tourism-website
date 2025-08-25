// Enhanced keyboard navigation for tab systems
class TabNavigator {
  constructor(tabContainer, options = {}) {
    this.tabContainer = tabContainer;
    this.tabs = Array.from(tabContainer.querySelectorAll("button"));
    this.currentIndex =
      this.tabs.findIndex(
        (tab) => tab.getAttribute("aria-selected") === "true"
      ) || 0;
    this.isVertical = options.vertical || false;

    this.init();
  }

  init() {
    // Set initial tabindex values - only the active tab should be focusable
    this.tabs.forEach((tab, index) => {
      tab.setAttribute("tabindex", index === this.currentIndex ? "0" : "-1");
      tab.addEventListener("keydown", this.handleKeydown.bind(this));
    });

    // Store reference to navigator on the container for external access
    this.tabContainer.tabNavigator = this;
  }

  handleKeydown(event) {
    const { key } = event;
    let newIndex = this.currentIndex;

    // Determine navigation keys based on orientation
    const prevKey = this.isVertical ? "ArrowUp" : "ArrowLeft";
    const nextKey = this.isVertical ? "ArrowDown" : "ArrowRight";

    switch (key) {
      case prevKey:
        event.preventDefault();
        newIndex =
          this.currentIndex > 0 ? this.currentIndex - 1 : this.tabs.length - 1;
        break;

      case nextKey:
        event.preventDefault();
        newIndex =
          this.currentIndex < this.tabs.length - 1 ? this.currentIndex + 1 : 0;
        break;

      case "Home":
        event.preventDefault();
        newIndex = 0;
        break;

      case "End":
        event.preventDefault();
        newIndex = this.tabs.length - 1;
        break;

      default:
        return; // Let other keys pass through normally
    }

    // Move focus and trigger the tab
    this.moveTo(newIndex);
    this.tabs[newIndex].click();
  }

  moveTo(newIndex) {
    if (newIndex < 0 || newIndex >= this.tabs.length) return;

    // Update tabindex values
    this.tabs[this.currentIndex].setAttribute("tabindex", "-1");
    this.tabs[newIndex].setAttribute("tabindex", "0");

    // Move focus
    this.tabs[newIndex].focus();

    // Update current index
    this.currentIndex = newIndex;
  }

  // Update current index when tabs change programmatically
  sync() {
    const activeIndex = this.tabs.findIndex(
      (tab) => tab.getAttribute("aria-selected") === "true"
    );
    if (activeIndex !== -1 && activeIndex !== this.currentIndex) {
      this.tabs[this.currentIndex].setAttribute("tabindex", "-1");
      this.tabs[activeIndex].setAttribute("tabindex", "0");
      this.currentIndex = activeIndex;
    }
  }
}

// Initialize navigation for all tab systems
function initTabNavigation() {
  // Destination tabs (horizontal)
  const destinationTabs = document.querySelector(".tab-list");
  if (destinationTabs) {
    new TabNavigator(destinationTabs, { vertical: false });
  }

  // Crew dots (horizontal)
  const crewTabs = document.querySelector(".dot-indicators");
  if (crewTabs) {
    new TabNavigator(crewTabs, { vertical: false });
  }

  // Technology numbers (vertical on desktop, horizontal on mobile/tablet)
  const technologyTabs = document.querySelector(".number-indicators");
  if (technologyTabs) {
    const updateOrientation = () => {
      const isDesktop = window.matchMedia("(min-width: 45em)").matches;
      if (technologyTabs.tabNavigator) {
        technologyTabs.tabNavigator.isVertical = isDesktop;
      }
    };

    // Initial setup
    const isDesktop = window.matchMedia("(min-width: 45em)").matches;
    new TabNavigator(technologyTabs, { vertical: isDesktop });

    // Update on resize
    window.addEventListener("resize", updateOrientation);
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTabNavigation);
} else {
  initTabNavigation();
}

// Make TabNavigator globally available
window.TabNavigator = TabNavigator;
