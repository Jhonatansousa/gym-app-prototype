
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './components/Home'
import { Division } from './components/Division'

export function Router() {

    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/division' element={<Division />} />
            </Route>
        </Routes>
    )
}