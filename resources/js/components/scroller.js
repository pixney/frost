
export default () => ({
  ready: false,
  previousWindowWidth: 0,
  classNames: {
    clone: '-clone',
    animate: '-animate',
    wrapper: 'c-scroller',
    original: '-original',
    list: 'c-scroller__list',
    item: 'c-scroller__item'
  },
  scroll: {
    list: null,
    wrapper: null,
    originalItem: null,
    requiredDuplicates: 3
  },

  /**
     * Initiate and start the scroller ones the document has been loaded.
     */
  onDocumentLoad () {
    this.$nextTick(() => {
      this.start()
    })
  },

  /**
     * On window resise event
     * Remove clones and repopulate
     *
     * TODO: Maybe add an interval check here to keep it hidden while user is
     * resizing the window.
     *
     * TODO: Check when increasing window width if there are enough items
     * or if we really have to do recalculations.
     */
  onWindowResize () {
    // If the window with is smaller than previous, no need to do anything.
    if (window.innerWidth < this.previousWindowWidth) {
      this.previousWindowWidth = window.innerWidth
      return
    }

    // Hide scroller
    this.ready = false

    // Remove Animation Class
    const lists = this.$root.querySelectorAll(`.${this.classNames.animate}`)

    lists.forEach(list => {
      list.classList.remove(`${this.classNames.animate}`)
    })

    // Remove all clones
    const clones = this.$root.querySelectorAll(`.${this.classNames.clone}`)
    clones.forEach(clone => {
      clone.remove()
    })

    // Run the start method
    this.start()
  },

  start () {
    this.scroll.wrapper = this.$root
    this.scroll.list = this.$root.querySelector(`.${this.classNames.list}`)
    this.scroll.originalItem = this.$root.querySelector(`.${this.classNames.item}.${this.classNames.original}`)

    this.scroll.list.style.width = 'auto'
    this.scroll.originalItem.style.width = 'auto'

    this.duplicateItems()
    this.ready = true
  },

  duplicateItems () {
    this.setRequiredDuplicates()

    // Duplicate enough list items to cover at least the window width.
    this.duplicateListItems()

    // Duplicate the list to make sure we have two of them.
    this.duplicateLists()

    // Set the width of the wrapper to auto
    this.scroll.wrapper.style.width = 'auto'

    // We are ready to start scrolling!
    this.scrollLists()

    this.previousWindowWidth = window.innerWidth
  },

  setRequiredDuplicates () {
    const itemWidth = this.$root.querySelector(`.${this.classNames.item}.${this.classNames.original}`).offsetWidth
    const numberOfListItemsThatFitOnScreen = window.innerWidth / itemWidth
    this.scroll.requiredDuplicates = (numberOfListItemsThatFitOnScreen > window.innerWidth) ? 2 : Math.ceil(numberOfListItemsThatFitOnScreen) + 1
  },

  duplicateLists () {
    const containerClone = this.scroll.list.cloneNode(true)
    containerClone.classList.remove(`${this.classNames.original}`)
    containerClone.classList.add(`${this.classNames.clone}`)
    this.scroll.wrapper.appendChild(containerClone)

    const elementWithOriginalClass = containerClone.querySelector(`.${this.classNames.original}`)
    elementWithOriginalClass.classList.remove(`${this.classNames.original}`)
    elementWithOriginalClass.classList.add(`${this.classNames.clone}`)
  },

  duplicateListItems () {
    for (let index = 1; index < this.scroll.requiredDuplicates; index++) {
      const itemClone = this.scroll.originalItem.cloneNode(true)
      itemClone.classList.remove(`${this.classNames.original}`)
      itemClone.classList.add(`${this.classNames.clone}`)
      this.scroll.list.appendChild(itemClone)
    }
  },

  scrollLists () {
    const lists = this.$root.querySelectorAll(`.${this.classNames.list}`)
    lists.forEach(list => {
      list.classList.add(`${this.classNames.animate}`)
    })
  }

})
