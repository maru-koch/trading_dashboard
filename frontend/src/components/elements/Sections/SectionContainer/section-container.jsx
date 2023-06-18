
import classes from './section-container.module.css'

export const SectionContainer = (props)=>{
    return (
        <section className={`${classes.section} ${props.bg}`}>{props.children}</section>
    )
}


