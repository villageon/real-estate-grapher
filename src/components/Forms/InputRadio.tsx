import styled from '@emotion/styled'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import MuiCircleIcon from '@mui/icons-material/Circle'
import { UseFormRegisterReturn } from 'react-hook-form'
import { OptionProps } from '@/utils/types/form'
import { CircleIcon, CircleIconBlank } from '@/components/Icons'
import { BaseText } from '@/utils/themes'

const InputRadioContainer = styled(FormControl)`
  align-items: start;
  display: flex;
  flex-direction: row;
  gap: 24px;
`

const Label = styled('div')`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 6px;
  white-space: nowrap;
`

const StyledRadioGroup = styled(RadioGroup)`
  gap: 12px;
`

const StyledFormControlLabel = styled(FormControlLabel)`
  gap: 8px;
  margin: 0;

  .MuiButtonBase-root {
    padding: 0;
  }
`

export type InputRadioProps = {
  id?: string
  label?: string
  type?: 'row' | 'twoRow' | 'column'
  size?: 'small' | 'medium'
  value?: number
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  register?: UseFormRegisterReturn
  options: OptionProps[]
  icon?: React.ReactNode
  checkboxIcon?: React.ReactNode
  checkedCheckboxIcon?: React.ReactNode
}

export const InputRadio = ({
  id,
  label,
  icon,
  type = 'column',
  size = 'small',
  name,
  options,
  onChange,
  register,
  value,
  checkboxIcon = <CircleIcon size={size} />,
  checkedCheckboxIcon = (
    <CircleIconBlank
      content={<MuiCircleIcon color="info" sx={{ fontSize: 16 }} />}
      size={size}
    />
  )
}: InputRadioProps) => {
  return (
    <InputRadioContainer>
      {label || icon ? (
        <Label>
          {icon}
          <BaseText>{label}</BaseText>
        </Label>
      ) : null}
      <StyledRadioGroup row={type === 'row'} aria-labelledby={id}>
        {options.map((option) => (
          <StyledFormControlLabel
            key={option.value}
            label={option.label}
            name={name}
            checked={value === option.value}
            control={
              <Radio
                size={size}
                value={option.value}
                onChange={onChange}
                {...register}
                icon={checkboxIcon}
                checkedIcon={checkedCheckboxIcon}
              />
            }
          />
        ))}
      </StyledRadioGroup>
    </InputRadioContainer>
  )
}
