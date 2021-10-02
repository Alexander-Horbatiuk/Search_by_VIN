import React from 'react'
import Box from '@mui/material/Box';
import './style.css';

export const BoxContantModal = ({detail}) => {

    return (
        <Box className="box_content_modal">
            <h2 className="content_modal_title">{detail.Name}</h2>
            <h5 className="content_modal_sub_title">{detail.GroupName}</h5>
            <p className="content_modal_text">{detail.Description.replace(/<\/?[^>]+>/g, '\n')}</p>
        </Box>
    )
};
