import {useEffect} from 'react'

export const keyCodes = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  SPACE: ' ',
  ENTER: 'Enter',
}

export type keyEventMap = {
  [keyCode: string]: () => void
}

export type KeyCodesType = {
  [key:string]:string
}

/**
 * Sets up handlers for tab navigation
 * @param getFocussables Array of elements to tab navigate between cyclicly
 * @param keyEvents Optional Map of special events to handle e.g. ESC to close a modal
 */
export function useTabNavigation(
  getFocussables: () => Array<HTMLElement>,
  keyEvents: keyEventMap = {},
  ) {
  let menuFocusables: HTMLElement[]
  let firstFocusableEl: HTMLElement
  let lastFocusableEl: HTMLElement

  function handleBackwardTab(e:KeyboardEvent) {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault()
      lastFocusableEl.focus()
    }
  }

  function handleForwardTab(e:KeyboardEvent) {    
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault()
      firstFocusableEl.focus()
    }
  }

  function handleKeyDown(e:KeyboardEvent){
    const map: keyEventMap = {
      ...keyEvents,

      [keyCodes.TAB]: () => {        
        if (menuFocusables && menuFocusables.length === 1) {          
          e.preventDefault()
          return
        }
        if (e.shiftKey) {
          handleBackwardTab(e)
        } else {
          handleForwardTab(e)
        }
      }
      
    }

    if(Object.keys(map).includes(e.key)){            
      map[e.key]()
    }
  }

  useEffect(() => {
    menuFocusables = getFocussables()

    if(menuFocusables){      
      firstFocusableEl = menuFocusables[0]
      lastFocusableEl = menuFocusables[menuFocusables.length - 1]
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}