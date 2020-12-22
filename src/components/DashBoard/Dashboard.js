import React, {component} from 'react'
import config from '../../config'
import UserContext from '../../contexts/UserContext'
export default class Dashboard extends component {
    static contextType= UserContext;

    compoundDidMount(){

        
        fetch(`${config.API_ENDPOINT}/language`)
        .then((res)=>{
            if(!res.ok){
                return res.json().then(e=>Promise.reject(e))
            }
            return res.json()
        })
        
    }
    render(){
        return(
            <div>
                <p>Dashboard</p>
            </div>
        )
    }
}