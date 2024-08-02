import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPopolotion, DeletePopulation, UpdateLastFunction, UpdateMone } from '../Slices/populotion.slce';
import { getAllItems, updateItem, deleteItem } from '../Api.request/Generic.request';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const GetCities = () => {
    const dispatch = useDispatch();
    const Populotions = useSelector((state) => state.Population.data);
    const functionName = useSelector((state) => state.Population.functionName);
    const mone = useSelector((state) => state.Population.mone);

    const [editingId, setEditingId] = useState(null);
    const [state,setState]=useState(null);
    const [editValue, setEditValue] = useState('');

    const gethPopulation = async () => {
        try {
            const response = await getAllItems(`api/getallPopulation/${mone}`);
            dispatch(UpdateLastFunction({ functionName: 'getSortInDescendingOrder' }));
            dispatch(getAllPopolotion(response.data));
        } catch {
            console.error('Error fetching fetchPopulation:');
        }
    }

    useEffect(() => {
        gethPopulation();
    }, []);

    const handleClick = async (params) => {
        try {
            const response = await getAllItems(`api/${params}/${mone}`);
            dispatch(UpdateLastFunction({ functionName: params }));
            dispatch(getAllPopolotion(response.data));
        } catch {
            console.error('Error fetching fetchPopulation:');
        }
    }

    const handlBackeClick = async (params) => {
        try {
            const response = await getAllItems(`api/${params}/${mone}`);
            dispatch(getAllPopolotion(response.data));
            dispatch(UpdateMone({ functionName: params }));
        } catch {
            console.error('Error fetching fetchPopulation:');
        }
    }

    const handleDeleteClick = async (id) => {
        try {
            await deleteItem(`api/deletePopulation`, id);
            dispatch(DeletePopulation(id));         
            setState(null);


        } catch {
            console.error('Error deleting population:');
        }
    }

    const handleEditClick = (population) => {
        setEditingId(population.id);
        setEditValue(population.name);
    }

    const handleSaveClick = async () => {
        try {
            await updateItem(`api/ChangePopulation/${editingId}/${editValue}`);
            setEditingId(null);
            setEditValue('');
            gethPopulation();
        } catch {
            console.error('Error updating population:');
        }
    }

    return (
        <>
            <Button onClick={() => handleClick("getSortInDescendingOrder")} variant="contained" color="primary">מיון בסדר עולה</Button>
            <Button onClick={() => handleClick("getSort")} variant="contained" color="primary">מיון בסדר יורד</Button>
            
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>שם</TableCell>
                            <TableCell>עריכה</TableCell>
                            <TableCell>מחיקה</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Populotions && Populotions.length > 0 ? (
                            Populotions.map((population) => (
                                <TableRow key={population.id}>
                                    <TableCell>
                                        {editingId === population.id ? (
                                            <TextField
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                            />
                                        ) : (
                                            population.name
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {editingId === population.id ? (
                                            <Button onClick={handleSaveClick} color="primary" variant="contained">שמור</Button>
                                        ) : (
                                            <Button onClick={() => handleEditClick(population)} color="primary" variant="contained">עריכה</Button>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleDeleteClick(population.id)} color="primary" variant="contained">מחיקה</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3}>אין נתונים להצגה</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button onClick={() => handlBackeClick(functionName)} variant="contained" color="secondary">אחורה</Button>
        </>
    );
}

export default GetCities;
