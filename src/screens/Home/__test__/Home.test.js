import { render, screen  } from "@testing-library/react"
import { Home } from "..";


it("exist - Welcome", ()=>{
    render(<Home/>);
    const linkElement=screen.getByText(/Welcome/i);
    expect(linkElement).toBeInTheDocument();
})