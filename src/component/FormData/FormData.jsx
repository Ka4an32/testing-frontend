import { Field, reduxForm, formValueSelector} from "redux-form";
import {connect} from 'react-redux'
import s from './FormData.module.scss';
import {createTextMask} from 'redux-form-input-masks';

// Формы
import inputControlForm from "../ConrolersForm/inputControlForm";
import selectControlForm from "../ConrolersForm/selectControlForm";


// Шаблон валидатора
import isRequired from "../../validators/isRequired";
import acceptPassword from "../../validators/acceptPassword";
import latinicLanguage from "../../validators/latinicLanguage"
import kirilicLanguage from "../../validators/kirilicLanguage";
import minSymbol from "../../validators/minSymbols";

// Валидаторы
let nameRequiredValidator = isRequired('Введите имя')
let lastNameRequiredValidator = isRequired('Введите фамилию')
let passwordRequiredValidator = isRequired('Укажите пароль')
let passwordAcceptRequiredValidator = isRequired('Повторите пароль')
let emailRequiredValidator = isRequired('Введите email')


let min2symbols = minSymbol(2)
let min6symbols = minSymbol(6)

// Создание маски для формы
let mask = createTextMask({
    pattern: '+7 (999) 999-99-99'
})


function getMonth(date){
    switch(date.getMonth()){
        case 0: return 'Января'
        case 1: return 'Февраля'
        case 2: return 'Марта'
        case 3: return 'Апреля'
        case 4: return 'Мая'
        case 5: return 'Июня'
        case 6: return 'Июля'
        case 7: return 'Августа'
        case 8: return 'Сентября'
        case 9: return 'Октября'
        case 10: return 'Ноября'
        case 11: return 'Декабря'
        default: return ''
    }
}



function Form(props){

    // Массив отсортированных городов
    let sortCity = []
    // Сортировка массива
    props.state.cities.forEach((city)=>{
        if(+city.population >= 50000){
            sortCity.push(city)
        }
    })
    sortCity.sort((a,b)=>{
        let cityA = a.city[0].toLowerCase()
        let cityB = b.city[0].toLowerCase()

        if(cityA < cityB) {
            return -1
        }

        if(cityA > cityB) {
            return 1
        }

        if(cityA === cityB) {
            if(a.population > b.population) {
                return 1
            }
            else{
                return -1
            }
        }
    })

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={inputControlForm} validate={[nameRequiredValidator,kirilicLanguage,min2symbols]} label="Имя" name='name' type='text' placeholder='Введите Имя'></Field>
                <Field component={inputControlForm} validate={[lastNameRequiredValidator,kirilicLanguage, min2symbols]} label="Фамилия" name='lastName' type='text' placeholder='Введите Фамилию'></Field>
                <Field component={selectControlForm} label='Ваш город' sortCity={sortCity} name='city'></Field>
            </div>
            <div className={s.hr}></div>
            <div>
                <Field component={inputControlForm} notrequired={true} validate={[passwordRequiredValidator,latinicLanguage,min6symbols]} label="Пароль" name='password' type='password' placeholder='Введите пароль'></Field>
                <Field component={inputControlForm} validate={[passwordAcceptRequiredValidator,acceptPassword,min6symbols]} label="Пароль еще раз" name='passwordAccept' type='password' placeholder='Повторите пароль'></Field>
            </div>
            <div className={s.hr}></div>
            <div>
                <Field component={inputControlForm} label='Номер телефона' name="phone" notrequired={true} {...mask}></Field>
                <Field component={inputControlForm} validate={props.hasEmail ? [emailRequiredValidator] : []} type='email' name='email' label='Электронная почта' notrequired={true} ></Field>
                <Field component={inputControlForm} type='checkbox' name='hasEmail' label="Я согласен" labelText='принимать актуальную информацию на email' notrequired={true} ></Field>
            </div>
            <button>Изменить</button>
            <p>последнее изменение: {`${props.state.date.getDate()} ${getMonth(props.state.date)} ${props.state.date.getFullYear()} в ${props.state.date.getHours()}:${props.state.date.getMinutes()}:${props.state.date.getSeconds()}`}</p>
        </form>
    )
}



let ReduxForm = reduxForm({
    form: 'data'
})(Form)
let selector = formValueSelector('data');





function mapStateToProps(state){
    return({
        state: state.cities,
        hasEmail: selector(state, 'hasEmail')
    })
}

function mapDispatchToProps(){
    return({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm)





