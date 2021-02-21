import { useEffect } from 'react'

export function useDidMount(callback: () => void | (() => void)) {
  // We disable because we want it to run only once and after the very first render of this page.
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => callback(), [])
  /* eslint-enable */
}