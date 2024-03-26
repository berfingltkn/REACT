// import React from 'react';
import { Data } from '../helpers/Data';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../styles/Menu.css';

export const Menu = () => {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Burgerlerimiz</h1>
            <div className='menuList'>
                {Data.map((menuItem, key) => {
                    return (
                        <Card key={key} className='menuItem'>
                            <CardMedia
                                component='img'
                                alt={menuItem.name}
                                height='140'
                                image={menuItem.image}
                            />
                            <CardContent>
                                <Typography variant='h5' component='div'>
                                    {menuItem.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {menuItem.content}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Fiyat: {menuItem.price} TL
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default Menu;