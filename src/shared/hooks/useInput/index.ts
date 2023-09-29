import { useState, ChangeEvent } from 'react'

const useInput = (initialValue = '') => {
	const [value, setValue] = useState(initialValue)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

	return {
		value,
		setValue,
		onChange
	}
}

export default useInput