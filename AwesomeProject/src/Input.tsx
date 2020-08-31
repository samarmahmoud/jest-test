import React from 'react';
import { KeyboardType} from 'react-native';
import { Item, Input as InputText } from 'native-base';
import styled from 'styled-components/native';

import { fonts, colors } from './globals';
import { Typography } from './Typography';

interface Props {
  iconLeft?: any;
  iconLeftBorder?: boolean;
  iconRight?: any;
  error: string;
  password?: boolean;
  placeholder: string;
  keyboardType?: KeyboardType;
  value?: string;
  onChange?: (e: Event) => void;
  onChangeText?: (str: string) => void;
  onIconRightPress?: () => void;
  maxLength?: number;
  editable?: boolean;
}

export const Input: React.FC<Props> = ({
  value,
  onChange,
  onChangeText,
  iconLeft,
  iconLeftBorder = false,
  iconRight,
  error,
  password = false,
  placeholder,
  keyboardType,
  maxLength,
  onIconRightPress,
  editable = true,
}) => {
  return (
    <>
      <ItemContainer error={!!error}>
        {iconLeft && <IconLeft>{iconLeft}</IconLeft>}
        {iconLeftBorder && <VerticalLine />}

        <TextInput
          onChange={onChange}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={colors.placeHolderColor}
          secureTextEntry={password}
          error={error}
          maxLength={maxLength}
          editable={editable}
        />
        {iconRight && <IconRight onPress={onIconRightPress}>{iconRight}</IconRight>}
      </ItemContainer>
      <ErrorText>{error}</ErrorText>
    </>
  );
};

const IconRight = styled.TouchableOpacity`
  margin-top: 14px;
`;

const VerticalLine = styled.View`
  background: ${colors.darkMaroon};
  width: 1px;
  height: 15px;
  margin-top: 6px;
`;

const IconLeft = styled.View`
  margin-right: 7px;
  margin-top: 4px;
`;

const ErrorText = styled(Typography)`
  font-size: 10px;
  color: red;
`;

const ItemContainer = styled(Item)`
  height: 65px;
`;

const TextInput = styled(InputText)`
  font-family: ${fonts.NeueRegular};
  font-size: 15px;
`;
