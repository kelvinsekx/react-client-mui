import { ReactNode, useState } from 'react';
import Header from './header/Header';
import Navbar from './navbar/Navbar';


interface IProps {
    children: ReactNode;
}

const BaseLayout = ({ children }: IProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Header onNavOpen={() => setOpen(true)} />
            <Navbar isNavOpen={open} onNavClose={() => setOpen(false)} />
            {children}
        </>
    );
};

export default BaseLayout;
