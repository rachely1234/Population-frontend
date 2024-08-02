

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPopolotion,UpdateLastFunction } from '../Slices/populotion.slce';
import { getAllItems, updateItem, getItemById } from '../Api.request/Generic.request';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchFeature = () => {

	const EnglishChars = new RegExp("^[a-zA-Z\-]+$");

	const dispatch = useDispatch();
	const Populotions = useSelector((state) => state.Population.data);
	const functionName = useSelector((state) => state.Population.functionName);
    const mone = useSelector((state) => state.Population.mone);
	const [query, setQuery] = useState('');
	const realquery="";
	const replaceArr = ['ש', 'נ', 'ב', 'ג', 'ק', 'כ', 'ע', 'י', 'ן', 'ח', 'ל', 'ך', 'צ', 'מ', 'ם', 'פ', "'", 'ר', 'ד', 'א', 'ו', 'ה', '', 'ס', 'ט', 'ז'];
	const replace = async () => {
		try {
			if (EnglishChars.test(query[query.length - 1])) {
				

				let char = query[query.length - 1];
				let charCode = char.charCodeAt(0);
				let charCodeA = 'a'.charCodeAt(0);

				let result = charCode - charCodeA;

		
				const newQuery = query.slice(0, -1) + replaceArr[result];
				

				console.log(query);

				return newQuery
			}
			else {
				return query
			}


		} catch {
			console.error('Error fetching fetchPopulation:');
		}
	}


	const SearchPopulation = async () => {
		try {



			const response = await getAllItems(`api/getPopulationByPart/${query}/${mone}`);
			dispatch(UpdateLastFunction({ functionName: 'SearchPopulation' }));
			dispatch(getAllPopolotion(response.data));
			


		} catch {
			console.error('Error fetching fetchPopulation:');
		}
	}


	useEffect(() => {
		const performSearch = async () => {
			
			const newQuery = await replace();
			debugger
			console.log(newQuery);
			setQuery(newQuery);
			console.log(query);
			SearchPopulation(newQuery);
		};
		performSearch();





	}, [query]);



	return (
		<form>

			<TextField
				id="search-bar"
				className="text"
				onChange={(e) => setQuery(e.target.value)}
				label="Enter a city name"
				variant="outlined"
				placeholder="Search..."
				size="small"
				value={query}
			/>

			<IconButton type="submit" aria-label="search">
				<SearchIcon style={{ fill: "blue" }} />
			</IconButton>


		</form>
	);
}

export default SearchFeature;





