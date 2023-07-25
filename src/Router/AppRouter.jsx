import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {HomeApp} from '../conponents/app/index'

export default function AppRouter(){
    return (
       
        <Switch>
            <Route            
            path={"/home"}
            commponent={HomeApp}
            />
                <Route            
            path={"/preview:id"}
            commponent={HomeApp}
            exact
            />

       <Route            
            patth={"/fullinfo:id"}
            commponent={HomeApp}
            exact
            />

 <Redirect to="/home" />

        </Switch>
)
}
   