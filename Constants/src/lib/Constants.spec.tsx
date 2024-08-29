import { render } from '@testing-library/react';

import Constants from './Constants';

describe('Constants', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Constants />);
    expect(baseElement).toBeTruthy();
  });
});
