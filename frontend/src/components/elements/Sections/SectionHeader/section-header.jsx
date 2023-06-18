
import  classes from './section-header.module.css'

export const SectionHeader = ({bg, title, subtitle})=>{
    return (
    <div className = {`${classes.sectionHeader}`} style={bg}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
    </div>
    )
}

