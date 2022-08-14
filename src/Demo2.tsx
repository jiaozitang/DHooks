import { Input } from 'antd'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const [val, setVal] = useState('')
  const debounceVal = useDebounce(val, { wait: 500 })
  const onSearch = (val: string) => {
    console.log('搜索', val || '全部')
  }

  // 当 debounceVal 发生变化时，请求搜索数据
  useEffect(() => {
    onSearch(debounceVal)
  }, [debounceVal])

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
