import { InputHTMLAttributes } from "react"
import { StyledInput } from "./input.styled"
import { Fieldset } from "./Fieldset.styled"
import { Label } from "./Label.styled"

// интерфейс наследует все атрибуты которые могут быть у <input />
// а также имеет своё собетсвенное поле label, которое отобразится вверху при наличии
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	fullWidth?: boolean
}



export const Input = (props: InputProps) => {
	const { // деструктурируем пропсы
		label,
		className,
		fullWidth,
		...otherProps //все остальные поля (атрибуты) собираем в массив otherProps
	} = props

	return (
		<Fieldset className={className} $fullWidth={fullWidth}>
			{label && <Label htmlFor={otherProps.name}>{label}</Label>}
			<StyledInput {...otherProps} />
		</Fieldset>
	)
}

/**
 * className попадает именно в fieldSet, а не в StyledInput
 * Чтобы при попытке стилизовать его, стили накладывались на fieldset.
 * Таким образом, при надобности можно стилизовать всё что есть внутри следующим образом:
 * const SearchInput = styled.Input`
 * //тут стили применяются к fieldset	
 * background: red;
 * 
 * & label {
 * 	тут стили к лейблу
 * }
 * & input {
 * 	тут стили к самому инпуту
 * }
 * `
 */
