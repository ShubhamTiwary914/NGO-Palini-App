

import { Box } from '@mui/material'
import Perks from './Perks'
import VolunteerForm from '../home/VolunteerForm'


export default function Team(){
    return(
        <section className='bg-rys-blue-300'>
            <Perks />
            <Box sx={{ my: 12 }}>
                <VolunteerForm />
            </Box>
        </section>
    )
}