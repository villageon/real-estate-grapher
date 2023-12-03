import { styled } from '@mui/material/styles'
import {
  fontColor,
  fontSize,
  fontWeight,
  lineHeight
} from '@/utils/clients/themeClient'

/**
 * 統一したタイトルのレイアウトを実装するために設置
 * 使用ファイルでインポートし必要であれば上書きでレイアウトを調整すること
 */
export const BaseText = styled('div')`
  color: ${fontColor.black};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.normal};
  line-height: ${lineHeight.large};
  white-space: pre-line;
  word-break: break-all;

  &.-red {
    color: ${fontColor.red};
  }
  &.-white {
    color: ${fontColor.white};
  }
  &.-left {
    text-align: left;
  }
  &.-end {
    text-align: end;
  }
  &.-center {
    text-align: center;
  }
  &.-inline {
    display: inline-block;
  }
  &.-bold {
    font-weight: ${fontWeight.bold};
  }
  &.-full {
    width: 100%;
  }
  &.-small {
    font-size: ${fontSize.small};
  }
  &.-medium {
    font-size: ${fontSize.medium};
  }
  &.-large {
    font-size: ${fontSize.large};
  }
  &.-xl {
    font-size: ${fontSize.xl};
  }
  &.-xxl {
    font-size: ${fontSize.xxl};
  }
  &.-xxxl {
    font-size: ${fontSize.xxxl};
  }
  &.-line-height-medium {
    line-height: ${lineHeight.medium};
  }
`
