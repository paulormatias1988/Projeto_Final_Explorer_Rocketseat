import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { AddFood } from '../pages/AddFood';
import { EditFood } from '../pages/EditFood';

export function AdminRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addFood' element={<AddFood/>}/>
            <Route path='/editFood/:id' element={<EditFood/>}/>
            <Route path='/details/:id' element={<Details/>}/>

            <Route path='*' element={<Navigate to={"/"} />} />
        </Routes>
    );
}