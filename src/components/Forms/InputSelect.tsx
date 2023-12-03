import styled from '@emotion/styled'
import {
  MenuItem,
  TextField,
  CircularProgress,
  TextFieldProps
} from '@mui/material'
import { UseFormRegisterReturn } from 'react-hook-form'
import { OptionProps } from '@/utils/types/form'
import { bgColor, fontSize } from '@/utils/clients/themeClient'
import IconArrowDown from '@/utils/assets/icon_arrow_down.svg'
import { BaseText } from '@/utils/themes'

const InputSelectContainer = styled('div')`
  align-items: center;
  display: flex;
  gap: 24px;
`
const LabelWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 6px;
  white-space: nowrap;
`

const CustomTextField = styled(TextField)`
  width: 100%;
  .MuiInputBase-root {
    border-radius: 2px;
    padding: 9px 12px 10px 12px;
  }
  .MuiOutlinedInput-root {
    background: ${bgColor.white};

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
  .MuiSelect-select {
    font-family:
      Noto Sans JP,
      sans-serif;
    font-size: ${fontSize.medium};
    padding: 0 !important;
  }
`

interface CustomSelectFormProps extends Omit<TextFieldProps, 'onChange'> {
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// TextField要素以外の型
interface AdditionalSelectFormProps {
  register?: UseFormRegisterReturn
  options: OptionProps[]
  icon?: React.ReactNode
}

export type SelectFormProps = CustomSelectFormProps & AdditionalSelectFormProps

export const InputSelect = ({
  onChange,
  register,
  error = false,
  id,
  name,
  label,
  icon,
  value,
  options,
  disabled = false,
  defaultValue = ''
}: SelectFormProps) => {
  return (
    <InputSelectContainer>
      {label || icon ? (
        <LabelWrapper>
          {icon}
          <BaseText>{label}</BaseText>
        </LabelWrapper>
      ) : null}
      <CustomTextField
        value={value}
        id={id}
        name={name}
        select
        disabled={disabled}
        error={error}
        {...register}
        onChange={onChange}
        defaultValue={defaultValue}
        SelectProps={{
          displayEmpty: true,
          renderValue: () => {
            if (options && options.length !== 0) {
              return (
                options.find((option) => option.value === value)?.label || ''
              )
            }
            return <CircularProgress size={20} />
          },
          IconComponent: () => null,
          endAdornment: <IconArrowDown />
        }}
      >
        {options.length !== 0 ? (
          options.map((option) => (
            <MenuItem
              key={`${option.label}-${option.value}`}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem />
        )}
      </CustomTextField>
    </InputSelectContainer>
  )
}
