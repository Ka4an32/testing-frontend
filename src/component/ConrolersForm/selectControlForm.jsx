import s from "./inputControl.module.scss";

export default function selectControlForm({input, meta, ...props}){

    return(
        <div className={s.field}>
            <label>
                    <div className={s.label}>{props.label}<span>*</span></div> 
                    <select className={s.select} {...input}>
                        {
                            props.sortCity.map((city)=>{
                                return(<option>{city.city}</option>)
                            })
                        }
                    </select>
            </label>
            <div className={s.errorBlock}>{ meta.touched && meta.error ? meta.error : ''}</div>
        </div>
    )
}