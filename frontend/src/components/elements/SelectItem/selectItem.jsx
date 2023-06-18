
import PropTypes from 'prop-types';
import classes from './selectItem.module.css';
import { Button, SectionWrapper, Section} from '../../elements'

export const SelectItem =({setItem, itemArray})=>{
    // returns the selected item
    return (
        <Section>
            <SectionWrapper>
                {
                    itemArray.map(item=>
                    <Button btnType ="secondary active" onClick ={()=>setItem({item})} text={item}/>)
                }
            </SectionWrapper>
        </Section>
    )
}

SelectItem.propTypes = {
    setItem: PropTypes.func,
    itemArray: PropTypes.array
}