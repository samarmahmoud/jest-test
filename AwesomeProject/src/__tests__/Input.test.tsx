import React from 'react';

import {Input} from '../Input';
import renderer from 'react-test-renderer';

it('should render Input', async () => {
  const baseElement = renderer
    .create(<Input onChange={() => null} placeholder="abc" value="Abc" error="error" />)
    .toJSON();
  expect(baseElement).toMatchSnapshot();
});
