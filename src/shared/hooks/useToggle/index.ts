import { useState } from "react"

export const useToggle = (initialValue: boolean = false) => {
	const [value, setValue] = useState(initialValue)

	const toggle = (newValue?: boolean) => {
		if (typeof newValue === 'boolean') setValue(newValue)
		else setValue(prev => !prev)
	}

	return {
		value,
		toggle
	}
}