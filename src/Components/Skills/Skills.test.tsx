import React from 'react';
import { render } from '@testing-library/react';
import Skills from './Skills';

describe('<Skills />', () => {
  it('should render skills', () => {
    const skills = {
      id: 'test',
      icon: 'test',
    };

    const { container } = render(<Skills skills={[skills]} />);
    expect(container.getElementsByClassName(skills.icon).length).toBe(1);
  });
});
