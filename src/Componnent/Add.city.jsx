import React, { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { Button, Input, Typography, Paper } from '@material-ui/core';
import { AddCity ,getAllPopolotion} from '../Slices/populotion.slce';
import { addItem,getAllItems, updateItem, deleteItem } from '../Api.request/Generic.request';


const AddCityp = () => {
    const dispatch = useDispatch();
    const [isAdding, setIsAdding] = useState(true);
    const [description, setDescription] = useState('');
    const Populotions = useSelector((state) => state.Population.data);
    const functionName = useSelector((state) => state.Population.functionName);
    const mone = useSelector((state) => state.Population.mone);

    const handleClick = async () => {
        try {
            const response = await addItem('api/addPopulation', description);
            dispatch(AddCity(response.data));
            const updatelist=await getAllItems(`api/getallPopulation/${mone}`);
            
            dispatch(getAllPopolotion(updatelist.data));
            setDescription('');
            
        } catch (error) {
            console.error('Error adding population:', error);
        }
    };

    return (

            <Paper style={{ padding: 20 }}>
                <Typography variant="h6" gutterBottom>
                    {isAdding ? (
                        <Button onClick={() => setIsAdding(!isAdding)}>הוסף משימה+</Button>
                    ) : (
                        <>
                            <Input
                            
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                placeholder="הכנס שם עיר"
                                fullWidth
                            />
                            <Button onClick={handleClick} color="primary" variant="contained">
                                שמור
                            </Button>
                        </>
                    )}
                </Typography>
            </Paper>
     
    );
};

export default AddCityp;
