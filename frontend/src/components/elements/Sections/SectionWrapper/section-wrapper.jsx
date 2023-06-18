import './section-wrapper.css'
import PropTypes from 'prop-types'
export const SectionWrapper = ({children, bg}) =>{
    return (
    <section className = {`sectionWrapper`} style={bg}>
        {children}
    </section>
    )
}

SectionWrapper.propTypes = {
    children: PropTypes.node,
    bg: PropTypes.string
}