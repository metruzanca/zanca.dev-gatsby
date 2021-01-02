import {default as jumpjs} from 'jump.js'

// Timing for Landing Page
export function jump(path: string, callback?: () => void) {
  jumpjs(path, {duration: 500, callback})
}