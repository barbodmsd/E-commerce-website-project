import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function Products() {
    const [products, setProducts] = useState()
    React.useEffect(() => {
        (async () => {
            try {
                const res = await fetch('http://localhost:1337/api/products?populate=*')
                const data = await res.json()
                setProducts(data.data)
                console.log({data})
            } catch (error) {
                alert(error)
            }
        })()
    }, []);
    const items = products?.map((e, index) => <Card key={index} sx={{ width: 300, height: 350,
       
     }}>
        <CardMedia
            sx={{ height: 150,objectFit:'cover',p:'10px' }}
            
            image={'http://localhost:1337'+e.attributes?.image?.data[0]?.attributes?.url}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {e.attributes.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {
                    e.attributes.price
                }
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>)
    return (
        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} gap={'20px'}>
            {
                items
            }
        </Stack>
    );
}
