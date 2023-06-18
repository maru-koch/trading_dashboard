import Proptypes from 'prop-types'

export const Layout=({children})=>{
    return (
        <div>
            <header>
                This is the Header
            </header>
            <main>
                This is the main body
            </main>
            <footer>
                This is the footer
            </footer>
        </div>
    )
}

Layout.propTypes = {
    children :Proptypes.node
}

