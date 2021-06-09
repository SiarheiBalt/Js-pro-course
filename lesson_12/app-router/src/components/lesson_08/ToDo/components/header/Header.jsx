import { Button } from "./input/Button"
import { Input } from "./input/Input"
import cl from "./Header.module.css"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Form } from "./form/Form"

export const Header = ({submit, text, onChangeInput}) => {

    return (<div>
        <div className={cl.header_top}>
            <h3>ToDo</h3>
            <div className={cl.span}>            
                <span><NavLink to="/Main" activeClassName={cl.activ} className={cl.item}>Main</NavLink></span>
                <span><NavLink to="/Arhive" activeClassName={cl.activ} className={cl.item}>Arhive</NavLink></span>
            </div>
        </div>
        <Form text={text} onChangeInput={onChangeInput} submit={submit}/>
    </div>
    )
}