import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Payment } from '../pages/Payment';

export function SaleRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/payment' element={<Payment/>}/>

            <Route path='*' element={<Navigate to={"/"} />} />
        </Routes>
    );
}