import PropTypes from 'prop-types'
import classes from './sectionTitle.module.css'

export const SectionTitle=({image, title})=>{
    return (
        <main className ={classes.sectionTitle__container} style={{backgroundImage: `url(${image})`}}>
            <section className ={classes.sectionTitle__wrapper} >
                <h1>{title}</h1>
            </section>
        </main>
    )
}

SectionTitle.propTypes={
    title:PropTypes.string
}