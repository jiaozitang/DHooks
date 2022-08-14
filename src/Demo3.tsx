import { Input } from 'antd'
import { debounce } from 'lodash'
import {
  DependencyList,
  EffectCallback,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import './App.css'
import { useDebounceEffect } from './hooks/useDebounce'

function App() {
  const [val, setVal] = useState('')
  const onSearch = (val: string) => {
    console.log('搜索', val || '全部')
  }

  useDebounceEffect(
    () => {
      onSearch(val)
    },
    [val],
    { wait: 500 }
  )

  return (
    <div className='App'>
      <Input
        value={val}
        placeholder='请输入'
        onChange={(e) => setVal(e.target.value)}
        allowClear
      />
    </div>
  )
}

export default App
