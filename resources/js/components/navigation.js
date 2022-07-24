export default () => ({
    open: false,
    showSocialMediaLinks: false,
    onToggle () {
      if (this.open) {
        this.showSocialMediaLinks = false
        this.open = false
        document.documentElement.style.overflow = 'auto'
      } else {
        this.$refs.overlay.style.paddingTop = `${this.$root.offsetHeight}px`
        document.documentElement.style.overflow = 'hidden'
        this.open = true
        setTimeout(() => {
          this.showSocialMediaLinks = true
        }, 400)
      }
    },
    onNavigation () {
      this.showSocialMediaLinks = false
      this.open = false
      document.documentElement.style.overflow = 'auto'
    }
  
  })