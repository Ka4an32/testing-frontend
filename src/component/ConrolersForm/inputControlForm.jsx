import s from "./inputControl.module.scss";

export default function inputControlForm({input, meta, ...props}){

    return(
        <div className={s.field}>
            <label>
                    <div className={s.label}>{props.label}{props.notrequired ? '': <span>*</span>}</div> 
                    <input {...input} type={props.type} className={ meta.touched && meta.error ? s.error : ''} placeholder={meta.touched && meta.error ? '' : props.placeholder}/> 
                    {props.labelText ? <p>{props.labelText}</p> : ''}
            </label>
            <div className={s.errorBlock}>{ meta.touched && meta.error ? meta.error : ''}</div>
        </div>
    )
}