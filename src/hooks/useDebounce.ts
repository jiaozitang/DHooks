import { debounce } from "lodash"
import { DependencyList, EffectCallback, useCallback, useEffect, useState } from "react"

export interface DebounceOptions {
  wait?: number
}

export const useDebounceFn = (fn: (...args: any) => any, options: DebounceOptions) => {
  return useCallback(debounce(fn, options.wait), [])
}

export function useDebounce<T>(value: T, options: DebounceOptions) {
  const [debounced, setDebounced] = useState(value)

  const update = useDebounceFn((value) => {
    setDebounced(value)
  }, options)

  useEffect(() => {
    update(value)
  }, [value])

  return debounced
}

export function useDebounceEffect(effect: EffectCallback, deps: DependencyList, options: DebounceOptions) {
  const [debounced, setDebounced] = useState({})

  const update = useDebounceFn(() => {
    setDebounced({})
  }, options)

  useEffect(() => {
    update()
  }, deps)

  useEffect(effect, [debounced])
}