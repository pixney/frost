import Alpine from 'alpinejs'
import Scroller from './components/scroller'
import Navigation from './components/navigation'
window.Alpine = Alpine
Alpine.data('scroller',Scroller)
Alpine.data('navigation',Navigation)
Alpine.start()