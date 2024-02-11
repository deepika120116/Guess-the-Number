import {test,expect,render, queryByText} from '@testing-library/react';
import Login from '../Login';


    test("should test whether heading is displayed",()=>{
        render(<Login/>);
        const heading=queryByText(/Login/);
        expect(heading).toBeInTheDocumnet();
    });