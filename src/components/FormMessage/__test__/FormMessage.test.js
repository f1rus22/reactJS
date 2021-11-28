import { render } from '@testing-library/react';
import FormMessage from "..";

it('snapshot component Form', () => {
    const component = render(<FormMessage />)
    expect(component).toMatchSnapshot();
})