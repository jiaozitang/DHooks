import { Input } from 'antd'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDebounceFn } from './hooks/useDebounce'
import './App.css'

function App() {
  const [val, setVal] = useState('')

  const onSearch = useDebounceFn(
    (val) => {
      console.log('搜索', val || '全部')
    },
    {
      wait: 500,
    }
  )

  // 当 val 发生变化时，请求搜索数据
  useEffect(() => {
    onSearch(val)
  }, [val])

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
