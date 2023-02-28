import Navbar from '../Navbar'
import { render , screen} from "@testing-library/react";

describe('navbar', () => {
    
    it('should display heading when rendered', () => {
        render(<Navbar />);
        expect(screen.getByText('BS')).toBeTruthy();
    });

    it('Should render correctly', () => {
        const {asFragment} = render(<Navbar />)
        expect(asFragment()).toMatchSnapshot();
    })
})