import { render } from '@testing-library/react';

import Utils from './Utils';

describe('Utils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Utils />);
    expect(baseElement).toBeTruthy();
  });
});