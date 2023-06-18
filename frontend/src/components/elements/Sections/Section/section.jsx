import './section.css'

export const Section = ({children, bg}) =>{
    return (
    <section className = "section__container" style={bg}>
        <section className = "section__wrapper">
            {children}
        </section>
    </section>
    )
}

