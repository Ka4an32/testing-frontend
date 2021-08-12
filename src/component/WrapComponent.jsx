import { connect } from "react-redux";

import FormData from "./FormData/FormData"

import { setDateCreateAction } from "../redux/reducers/CityReducers";

import s from './WrapComponent.module.scss'

function WrapComponent(props){

    function submit(value){
        props.setDate();
        console.log(value);
    }

    return(
        <div className={s.form}>
            <h1>Здравствуйте, <span>Человек</span></h1>
            <FormData onSubmit={submit}></FormData>
        </div>
    )
}






let mapStateToProps = function(state){
    return {
        state: state.cities
    }
}

let mapDisptachToProps = function(dispatch){
    return{
        setDate(){
            dispatch(setDateCreateAction(new Date()))
        }
    }
}

export default connect(mapStateToProps,mapDisptachToProps)(WrapComponent);