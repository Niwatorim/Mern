import { Box, Button, Container, Paper, Typography } from "@mui/material"

  
function MUI() {
  const services = ['Service 1','Service 2','Service 3'];

  return (
    <>
      <Container>
        <Typography
          variant="h1" 
          sx={{
            my:4, 
            textAlign:"center", 
            color:'primary.main'
          }}>
            Services  
        </Typography>

        <Typography
          variant="h2">
          Overview
        </Typography>
        <Box sx={{display:'flex',
           flexDirection:{
            xs:'column', md:'row'
           },
           justifyContent:'space-between',
           gap:4}}>  
          
          {services.map((service) => (
          
          <Paper key={service} elevation={3} sx={{ p: 2, my: 2, width:{xs:1, md:320}}}>
                <Box sx={{m:3}}></Box>
                <Typography variant="h3">{service}</Typography>
          
                <Typography sx={{mt:3}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam minima iure fugiat repudiandae obcaecati?
                </Typography>
          
                <Button variant="contained" color="secondary" sx={{mt:2}}>
                  Learn More
                </Button>
          </Paper>
          ))}
        </Box>

      </Container>
    </>
  )
}

/*      
Example usage of the material ui
import { Box, Container, Typography } from "@mui/material"


      <Container sx={{bgcolor: 'tomato', height:'100vh'}}> add ur styling here inside sx, makes it flexible
        <Typography variant="h1"> //use this for text, specify variant cuz default is <p>
          Hello!
        </Typography>
      </Container>
      <Box sx={{p:1, bgcolor:'rgb(255,20,255)', textAlign:'center'}}>
        hallo
      </Box>
      
*/

export default MUI
